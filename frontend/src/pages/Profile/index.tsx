import React, { useRef } from 'react';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';

import { Container, Content, SidebarContainer } from './styles';
import Sidebar from '../../components/Sidebar';

const Profile: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	return (
		<Container>
			<SidebarContainer>
				<Sidebar />
			</SidebarContainer>

			<Content>
				<Form ref={formRef} onSubmit={() => {}}>
					<legend>Meu perfil</legend>
					<Input
						type="text"
						id="username"
						name="username"
						placeholder="Username"
						icon={FiLock}
					/>
					<div className="email">
						<Input
							type="email"
							id="email"
							name="email"
							placeholder="E-mail"
							icon={FiLock}
						/>
					</div>
					<Input
						type="password"
						id="password"
						name="password"
						placeholder="Senha atual"
						icon={FiLock}
					/>
					<Input
						type="password"
						id="new-password"
						name="new-password"
						placeholder="Nova senha"
						icon={FiLock}
					/>
					<Input
						type="password"
						id="confirm-new-password"
						name="confirm-new-password"
						placeholder="Confirme a nova senha"
						icon={FiLock}
					/>
					<button className="action-button" type="submit">
						Confirmar mudanças
					</button>
				</Form>
			</Content>
		</Container>
	);
};

export default Profile;
