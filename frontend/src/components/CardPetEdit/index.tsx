import React from 'react';

import { Container } from './styles';

const CardPet: React.FC = () => {
	return (
		<Container>
			<div className="box-1">
				<img
					src="https://www.rbsdirect.com.br/imagesrc/25743537.jpg?w=580"
					alt="Caramelo"
				/>
				<div>
					<h3>Rick</h3>
					<div>
						<label>Porte: </label>
						<span>Grande</span>
					</div>
					<div>
						<label>Tipo: </label>
						<span>Cachorro</span>
					</div>
					<div>
						<label>Sexo: </label>
						<span>Macho</span>
					</div>
				</div>
			</div>
			<label>Descrição</label>
			<p>
				Conheça o Rick, um pingo de gente que transmite amor e alegria por onde
				passa, o que ele não tem de tamanho ele tem de energia, sempre pronto
				para brincar.
			</p>
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
