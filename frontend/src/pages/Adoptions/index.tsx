import React, { useEffect, useState } from 'react';

import CardPet from '../../components/CardPet';
import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../hooks/auth';
import Pet from '../../interfaces/Pet';
import Adoption from '../../interfaces/Adoption'
import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import { Container, Content, LeftContent, RightContent, Pets } from './styles';

const Adoptions: React.FC = () => {
	const [adoptions, setAdoptions] = useState<Adoption[]>([]);

	const { addToast } = useToast();
	const { token } = useAuth();

	let buttonNameStr;

	useEffect(() => {
		api
			.get('/adoptions', {
				headers: { Authorization: `Bearer ${token}` }
			})
			.then(({ data }) => {
				console.log(data)
				setAdoptions(data)
			});
	}, [token]);

	return (
		<Container>
			<Sidebar />
			<Content>
				<LeftContent>
					<h2>Adoções</h2>
					<Pets>
						{adoptions.map((adoption) => (
							<CardPet 
								key={adoption.pet.id}
								buttonName={() => {
									if(adoption.returned) {
										return "Retornado";
									} else {
										return "Retornar";
									}
								}}
								isDisabled={adoption.returned}
								pet={adoption.pet}
								handleClickButton={() => {
										try{
											const response = api.patch(
												`/adoptions/${adoption.id}/return`,
												{},
												{
													headers: { Authorization: `Bearer ${token}` },
												},
											);

											addToast({ type: 'sucess', title: 'Retorno de pet efetuado com sucesso.' })
										} catch (err) {
											addToast({
												type: 'error',
												title: 'Erro na criação',
												description: 'Ocorreu um erro ao retornar o Pet'
											});
										}
										
									}
								}
							/>
						))}
					</Pets>
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
