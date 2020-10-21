import React from 'react';
import CardPet from '../../components/CardPet';

import Sidebar from '../../components/Sidebar/index';

import { Container, Content, LeftContent, RightContent } from './styles';

const Adoptions: React.FC = () => {
	return (
		<Container>
			<Sidebar />
			<Content>
				<LeftContent>
					<h2>Adoções</h2>
					<div className="cardContainer">{/** <CardPet /> */}</div>
					<div className="cardContainer">{/** <CardPet /> */}</div>
				</LeftContent>

				<RightContent>
					<h2>Solicitações</h2>
					<div className="cardContainer">{/** <CardPet /> */}</div>
					<div className="cardContainer">{/** <CardPet /> */}</div>
				</RightContent>
			</Content>
		</Container>
	);
};

export default Adoptions;
