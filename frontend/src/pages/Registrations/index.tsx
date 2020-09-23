import React from 'react';
import CardPet from '../../components/CardPetEdit';
import Sidebar from '../../components/Sidebar';

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
	return (
		<Container>
			<SidebarContainer>
				<Sidebar />
			</SidebarContainer>

			<Content>
				<button type="button">Cadastrar Pet</button>
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
									<button type="button">Aceitar</button>
									<button type="button">Recusar</button>
								</ButtonWrapper>
							</Solicitation>
							<Solicitation>
								<p>
									<strong>Navarrotheus</strong> quer adotar{' '}
									<strong>Rick</strong>
								</p>
								<ButtonWrapper>
									<button type="button">Aceitar</button>
									<button type="button">Recusar</button>
								</ButtonWrapper>
							</Solicitation>
							<Solicitation>
								<p>
									<strong>Navarrotheus</strong> quer adotar{' '}
									<strong>Rick</strong>
								</p>
								<ButtonWrapper>
									<button type="button">Aceitar</button>
									<button type="button">Recusar</button>
								</ButtonWrapper>
							</Solicitation>
							<Solicitation>
								<p>
									<strong>Navarrotheus</strong> quer adotar{' '}
									<strong>Rick</strong>
								</p>
								<ButtonWrapper>
									<button type="button">Aceitar</button>
									<button type="button">Recusar</button>
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
	);
};

export default Registration;
