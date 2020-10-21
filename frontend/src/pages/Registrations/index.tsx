import React, { useEffect, useState } from 'react';
import CardPet from '../../components/CardPetEdit';
import Sidebar from '../../components/Sidebar';
import ModalAddPet from '../../components/ModalAddPet';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import { Pet } from '../Dashboard';
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

const Registration: React.FC = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [pets, setPets] = useState<Pet[]>([]);

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
		pet: Omit<Pet, 'id' | 'user' | 'available' | 'description'>,
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

	return (
		<>
			<ModalAddPet
				isOpen={modalOpen}
				setIsOpen={toggleModal}
				handleAddPet={handleAddPet}
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
						<PetWrapper>
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
						</PetWrapper>
						<PetWrapper>
							<CardPet />
						</PetWrapper>
					</Pets>
				</Content>
			</Container>
		</>
	);
};

export default Registration;
