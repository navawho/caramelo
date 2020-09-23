import React from 'react';
import CardPet from '../../components/CardPetEdit';

import { Container } from '../../styles/global';

import {
	Content,
	PetWrapper,
	Solicitations,
	Solicitation,
	ButtonWrapper,
	Pets,
} from './styles';

const SignUp: React.FC = () => {
	return (
		<Container>
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

export default SignUp;
