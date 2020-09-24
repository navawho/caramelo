import React, { useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';

import Logo from '../../assets/Logo.png';

import { Container, Content, Card, Inputs } from './styles';

const SignUp: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	return (
		<Container>
			<Content>
				<img src={Logo} alt="Caramelo"/>
				<Card>
					<h3>Cadastrar</h3>
					<Form ref={formRef} onSubmit={() => {}}>
						<Inputs>
							<label htmlFor="username">Username</label>
							<Input
								type="text"
								id="username"
								name="username"
								placeholder="Seu username"
								icon={FiLock}
							/>
							<label htmlFor="password">Senha</label>
							<Input
								type="password"
								id="password"
								name="password"
								placeholder="Sua senha"
								icon={FiMail}
							/>
							<label htmlFor="passwordConfirmation">Confirme sua senha</label>
							<Input
								type="password"
								id="passwordConfirmation"
								name="passwordConfirmation"
								placeholder="Sua senha"
								icon={FiMail}
							/>
							<button type="submit">Cadastrar</button>
							<Link to="/sign-in">
								Já possui conta? Faça login
							</Link>
						</Inputs>
					</Form>
				</Card>
			</Content>
		</Container>
	);
};

export default SignUp;
