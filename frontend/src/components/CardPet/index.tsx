import React from 'react';
import Pet from '../../interfaces/Pet';

import { Container } from './styles';

interface Props {
	pet: Pet;
	buttonName: string;
	handleClickButton(): void;
}

const CardPet: React.FC<Props> = ({ pet, buttonName, handleClickButton }) => {
	return (
		<Container>
			<div className="box-1">
				<img
					src="https://www.rbsdirect.com.br/imagesrc/25743537.jpg?w=580"
					alt={pet.name}
				/>
				<div>
					<h3>{pet.name}</h3>
					<div>
						<label>Porte: </label>
						<span>{pet.port}</span>
					</div>
					<div>
						<label>Tipo: </label>
						<span>{pet.type}</span>
					</div>
					<div>
						<label>Sexo: </label>
						<span>{pet.sex}</span>
					</div>
				</div>
			</div>
			<label>Descrição</label>
			<p>{pet.description}</p>
			<button
				className="action-button"
				type="button"
				onClick={handleClickButton}
			>
				{buttonName}
			</button>
		</Container>
	);
};

export default CardPet;
