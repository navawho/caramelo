import React from 'react';

import { Container } from './styles';
import { Pet } from '../../pages/Dashboard';

interface Props {
	pet: Pet;
}

const CardPet: React.FC<Props> = ({ pet }) => {
	return (
		<Container>
			<div className="box-1">
				<img
					src="https://www.rbsdirect.com.br/imagesrc/25743537.jpg?w=580"
					alt="Caramelo"
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
			<div className="button-wrapper">
				<button className="action-button" type="button">
					Editar
				</button>
				<button className="action-button" type="button">
					Remover
				</button>
			</div>
		</Container>
	);
};

export default CardPet;
