import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';

import { Container, Content, Card, Inputs } from './styles';

import Logo from '../../assets/Logo.png';
import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
	username: string;
	password: string;
}

const SignIn: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const { token, signIn } = useAuth();

	const handleSubmit = useCallback(
		async (data: SignInFormData) => {
			try {
				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
					username: Yup.string().required('Username obrigatório'),
					password: Yup.string().required('Senha obrigatória'),
				});

				await schema.validate(data, { abortEarly: false });

				console.log(data);

				signIn({ username: data.username, password: data.password });
			} catch (err) {
				const errors = getValidationErrors(err);

				formRef.current?.setErrors(errors);
			}
		},
		[signIn],
	);

	return (
		<Container>
			<Content>
				<img src={Logo} alt="Caramelo" />
				<Card>
					<h3>Entrar</h3>
					<Form ref={formRef} onSubmit={handleSubmit}>
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
							<button type="submit">Entrar</button>
							<Link to="/sign-up">Ainda não possui conta? Cadastre-se</Link>
						</Inputs>
					</Form>
				</Card>
			</Content>
		</Container>
	);
};

export default SignIn;
