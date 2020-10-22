import React from 'react';
import Pet from '../../interfaces/Pet';

import { Container } from './styles';

interface Props {
	pet: Pet;
	buttonName: string;
	handleClickButton(): void;
	isDisabled: boolean;
}

const CardPet: React.FC<Props> = ({
	pet,
	buttonName,
	handleClickButton,
	isDisabled,
}) => {
	return (
		<Container>
			<div className="box-1">
				<img src={pet.imageUrl} alt={pet.name} />
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
				disabled={isDisabled}
			>
				{buttonName}
			</button>
		</Container>
	);
};

export default CardPet;
