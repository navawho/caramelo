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
import ModalEditPet from '../../components/ModalEditPet';

const Registration: React.FC = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [pets, setPets] = useState<Pet[]>([]);
	const [selectedPet, setSelectedPet] = useState({} as Pet);

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

	function toggleEditModal(): void {
		setEditModalOpen(!editModalOpen);
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

	return (
		<>
			<ModalAddPet
				isOpen={modalOpen}
				setIsOpen={toggleModal}
				handleAddPet={handleAddPet}
			/>
			<ModalEditPet
				isOpen={editModalOpen}
				setIsOpen={toggleEditModal}
				pet={selectedPet}
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
								<CardPetEdit pet={pet} handleRemoveButton={handleRemovePet} />
							</PetWrapper>
						))}
					</Pets>
				</Content>
			</Container>
		</>
	);
};

export default Registration;
