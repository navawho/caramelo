import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import Input from '../../components/InputWithoutUnform';

import Checkbox from '../../components/Checkbox';

import { Container, Filters, Filter, FilterOptions, Pets } from './styles';

import CardPet from '../../components/CardPet';

const SignUp: React.FC = () => {
	const [name, setName] = useState('');

	return (
		<Container>
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
			</Pets>
		</Container>
	);
};

export default SignUp;
