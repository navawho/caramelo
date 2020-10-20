import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';
import api from '../../services/api';
import Logo from '../../assets/Logo.png';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Card, Inputs } from './styles';

interface SignUpFormData {
	username: string;
	password: string;
	confirmPassword: string;
}

const SignUp: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	const history = useHistory();
	const { addToast } = useToast();

	const handleSubmit = useCallback(
		async (data: SignUpFormData) => {
			try {
				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
					username: Yup.string().required('Username obrigatório'),
					password: Yup.string().required('Senha obrigatória'),
				});

				await schema.validate(data, { abortEarly: false });

				await api.post('/sign-up', data);

				addToast({
					type: 'sucess',
					title: 'Sucesso no cadastro',
					description: 'Você já pode realizar login.',
				});

				history.push('/');
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const errors = getValidationErrors(err);

					formRef.current?.setErrors(errors);

					return;
				}

				addToast({
					type: 'error',
					title: 'Erro no cadastro',
					description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
				});
			}
		},
		[addToast, history],
	);

	return (
		<Container>
			<Content>
				<img src={Logo} alt="Caramelo" />
				<Card>
					<h3>Cadastrar</h3>
					<Form ref={formRef} onSubmit={handleSubmit}>
						<Inputs>
							<Input
								type="text"
								id="username"
								name="username"
								placeholder="Seu username"
								icon={FiUser}
							/>

							<Input
								type="email"
								id="email"
								name="email"
								placeholder="Seu email"
								icon={FiMail}
							/>

							<Input
								type="text"
								id="phone"
								name="phone"
								placeholder="Seu telefone"
								icon={FiPhone}
							/>

							<div className="password-wrapper">
								<Input
									type="password"
									id="password"
									name="password"
									placeholder="Sua senha"
									icon={FiLock}
								/>
							</div>

							<Input
								type="password"
								id="confirmPassword"
								name="confirmPassword"
								placeholder="Confirme sua senha"
								icon={FiLock}
							/>

							<button className="action-button" type="submit">
								Cadastrar
							</button>
							<Link to="/sign-in">Já possui conta? Faça login</Link>
						</Inputs>
					</Form>
				</Card>
			</Content>
		</Container>
	);
};

export default SignUp;
