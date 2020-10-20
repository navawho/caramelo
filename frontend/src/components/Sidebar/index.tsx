import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiClipboard, FiUser, FiLogOut } from 'react-icons/fi';
import { FaPaw } from 'react-icons/fa';

import { Container, NavContainer, NavItem } from './styles';

import Logo from '../../assets/Logo-no-font.png';
import { useAuth } from '../../hooks/AuthContext';

const Sidebar: React.FC = () => {
	const { signOut } = useAuth();
	
	return (
		<Container>
			<NavContainer>
				<div className="topNav">
					<NavItem className="image">
						<img src={Logo} alt="Caramelo"/>
					</NavItem>
					<NavItem>
						<Link to="/dashboard">
							<FiHome size={30} />
							<p>Dashboard</p>
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/registrations">
							<FiClipboard size={30} />
							<p>Meus Cadastros</p>
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/adoptions">
							<FaPaw size={30} />
							<p>Minhas Adoções</p>
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/profile">
							<FiUser size={30} />
							<p>Meu perfil</p>
						</Link>
					</NavItem>
				</div>
				<div className="botNav">
					<NavItem onClick={signOut}>
							<FiLogOut size={30} />
							<p>Sair</p>
					</NavItem>
				</div>
			</NavContainer>
		</Container>
	);
};

export default Sidebar;
