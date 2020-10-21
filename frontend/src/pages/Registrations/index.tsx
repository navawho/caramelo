import React, { useEffect, useState } from 'react';
import CardPetEdit from '../../components/CardPetEdit';
import Sidebar from '../../components/Sidebar';
import ModalAddPet from '../../components/ModalAddPet';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
	Container,
	Content,
	PetWrapper,
	Solicitations,
	Solicitation,
	ButtonWrapper,
	Pets,
	SidebarContainer,
} from './styles';
import Pet from '../../interfaces/Pet';
import ModalUpdatePet from '../../components/ModalUpdatePet';

const Registration: React.FC = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [updateModalOpen, setUpdateModalOpen] = useState(false);
	const [pets, setPets] = useState<Pet[]>([]);
	const [editingPet, setEditingPet] = useState({} as Pet);

	const { addToast } = useToast();
	const { token } = useAuth();

	useEffect(() => {
		api
			.get('/pets', {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then(({ data }) => {
				setPets(data);
			});
	}, [token]);

	async function handleAddPet(
		pet: Omit<Pet, 'id' | 'user' | 'available'>,
	): Promise<void> {
		try {
			const response = await api.post(
				'/pets',
				{ ...pet },
				{ headers: { Authorization: `Bearer ${token}` } },
			);

			setPets([...pets, response.data]);

			addToast({ type: 'sucess', title: 'Pet cadastrado com sucesso!' });
		} catch (err) {
			addToast({
				type: 'error',
				title: 'Erro na criação',
				description: 'Ocorreu um erro ao criar o pet, tente novamente.',
			});
		}
	}

	function toggleModal(): void {
		setModalOpen(!modalOpen);
	}

	function toggleUpdateModal(): void {
		setUpdateModalOpen(!updateModalOpen);
	}

	function handleEditPet(pet: Pet) {
		setEditingPet(pet);
		toggleUpdateModal();
	}

	async function handleRemovePet(petId: number): Promise<void> {
		try {
			await api.delete(`/pets/${petId}`, { headers: { Authorization: `Bearer ${token}` } });

			setPets((oldPets) => oldPets.filter(pet => pet.id !== petId))

			addToast({ type: 'sucess', title: 'Pet removido com sucesso!' });
		} catch(err) {
			addToast({type: 'error', title: 'Erro na deleção', description: 'Ocorreu um erro ao tentar deletar o pet, por favor tente novamente'})
		}
	}

	async function handleUpdatePet(pet: Pet): Promise<void> {
		try {
			const updateData: any = {};
			
			if (pet.name !== editingPet.name) {
				updateData.name = pet.name;
			}

			if (pet.imageUrl !== editingPet.imageUrl) {
				updateData.imageUrl = pet.imageUrl;
			}

			if (pet.description !== editingPet.description) {
				updateData.description = pet.description;
			}

			if (pet.port !== editingPet.port) {
				updateData.port = pet.port;
			}

			if (pet.sex !== editingPet.sex) {
				updateData.sex = pet.sex;
			}

			if (pet.type !== editingPet.type) {
				updateData.type = pet.type;
			}

			const { data } = await api.patch(`/pets/${editingPet.id}`, {...updateData}, { headers: { Authorization: `Bearer ${token}` } });

			setPets(pets.map(mappedPet => mappedPet.id === editingPet.id ? {...data} : mappedPet))

			addToast({ type: 'sucess', title: 'Pet atualizado com sucesso!' });
		} catch(err) {
			addToast({type: 'error', title: 'Erro na atualização', description: 'Ocorreu um erro ao tentar atualizar o pet, por favor tente novamente'})
		}
	}

	return (
		<>
			<ModalAddPet
				isOpen={modalOpen}
				setIsOpen={toggleModal}
				handleAddPet={handleAddPet}
			/>
			<ModalUpdatePet
				isOpen={updateModalOpen}
				setIsOpen={toggleUpdateModal}
				handleUpdatePet={handleUpdatePet}
				pet={editingPet}
			/>
			<Container>
				<SidebarContainer>
					<Sidebar />
				</SidebarContainer>
				<Content>
					<button
						className="action-button"
						type="button"
						onClick={() => setModalOpen(true)}
					>
						Cadastrar Pet
					</button>
					<Pets>
						{/* <PetWrapper>
							<CardPet />
							<Solicitations>
								<Solicitation>
									<p>
										<strong>Navarrotheus</strong> quer adotar{' '}
										<strong>Rick</strong>
									</p>
									<ButtonWrapper>
										<button className="action-button" type="button">
											Aceitar
										</button>
										<button className="action-button" type="button">
											Recusar
										</button>
									</ButtonWrapper>
								</Solicitation>
								<Solicitation>
									<p>
										<strong>Navarrotheus</strong> quer adotar{' '}
										<strong>Rick</strong>
									</p>
									<ButtonWrapper>
										<button className="action-button" type="button">
											Aceitar
										</button>
										<button className="action-button" type="button">
											Recusar
										</button>
									</ButtonWrapper>
								</Solicitation>
								<Solicitation>
									<p>
										<strong>Navarrotheus</strong> quer adotar{' '}
										<strong>Rick</strong>
									</p>
									<ButtonWrapper>
										<button className="action-button" type="button">
											Aceitar
										</button>
										<button className="action-button" type="button">
											Recusar
										</button>
									</ButtonWrapper>
								</Solicitation>
								<Solicitation>
									<p>
										<strong>Navarrotheus</strong> quer adotar{' '}
										<strong>Rick</strong>
									</p>
									<ButtonWrapper>
										<button className="action-button" type="button">
											Aceitar
										</button>
										<button className="action-button" type="button">
											Recusar
										</button>
									</ButtonWrapper>
								</Solicitation>
							</Solicitations>
						</PetWrapper> */}
						{pets.map((pet) => (
							<PetWrapper key={pet.id}>
								<CardPetEdit pet={pet} handleRemoveButton={handleRemovePet} handleUpdateButton={handleEditPet} />
							</PetWrapper>
						))}
					</Pets>
				</Content>
			</Container>
		</>
	);
};

export default Registration;
