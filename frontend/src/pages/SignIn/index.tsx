import React, { useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';

import { Container, Content, Card, Inputs } from './styles';

const SignIn: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	return (
		<Container>
			<Content>
				<Card>
					<h3>Entrar</h3>
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
							<button type="submit">Entrar</button>
						</Inputs>
					</Form>
				</Card>
			</Content>
		</Container>
	);
};

export default SignIn;
