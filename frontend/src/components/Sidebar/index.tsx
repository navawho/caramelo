import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiClipboard, FiUser, FiLogOut } from 'react-icons/fi';
import { FaPaw } from 'react-icons/fa';

import { Container, NavContainer, NavItem } from './styles';

const Sidebar: React.FC = () => {
	return (
		<Container>
			<NavContainer>
				<div className="topNav">
					<NavItem>
						<Link to="/">
							<FiHome size={30} />
							<p>Dashboard</p>
						</Link>
					</NavItem>
					<NavItem>
						<Link to="">
							<FiClipboard size={30} />
							<p>Meus Cadastros</p>
						</Link>
					</NavItem>
					<NavItem>
						<Link to="">
							<FaPaw size={30} />
							<p>Minhas Adoções</p>
						</Link>
					</NavItem>
					<NavItem>
						<Link to="">
							<FiUser size={30} />
							<p>Meu perfil</p>
						</Link>
					</NavItem>
				</div>
				<div className="botNav">
					<NavItem>
						<Link to="">
							<FiLogOut size={30} />
							<p>Sair</p>
						</Link>
					</NavItem>
				</div>
			</NavContainer>
		</Container>
	);
};

export default Sidebar;
