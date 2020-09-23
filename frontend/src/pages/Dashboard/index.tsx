import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import Input from '../../components/InputWithoutUnform';

import Checkbox from '../../components/Checkbox';

import {
	Container,
	Content,
	Filters,
	Filter,
	FilterOptions,
	Pets,
	SidebarContainer,
	OutContainer,
} from './styles';

import CardPet from '../../components/CardPet';
import Sidebar from '../../components/Sidebar';

const SignUp: React.FC = () => {
	const [name, setName] = useState('');

	return (
		<OutContainer>
			<SidebarContainer>
				<Sidebar />
			</SidebarContainer>

			<Container>
				<Content>
					<Filters>
						<Input
							value={name}
							type="text"
							placeholder="Pesquise por nome"
							icon={FiSearch}
							onChange={(e) => setName(e.target.value)}
						/>
						<Filter>
							<h4>Porte</h4>
							<FilterOptions>
								<Checkbox />
								<label>Pequeno</label>
								<Checkbox />
								<label>Médio</label>
								<Checkbox />
								<label>Grande</label>
							</FilterOptions>
						</Filter>
						<Filter>
							<h4>Tipo</h4>
							<FilterOptions>
								<Checkbox />
								<label>Cachorro</label>
								<Checkbox />
								<label>Gato</label>
							</FilterOptions>
						</Filter>
						<Filter>
							<h4>Sexo</h4>
							<FilterOptions>
								<Checkbox />
								<label>Macho</label>
								<Checkbox />
								<label>Fêmea</label>
							</FilterOptions>
						</Filter>
					</Filters>
					<Pets>
						<CardPet />
						<CardPet />
						<CardPet />
						<CardPet />
						<CardPet />
						<CardPet />
					</Pets>
				</Content>
			</Container>
		</OutContainer>
	);
};

export default SignUp;
