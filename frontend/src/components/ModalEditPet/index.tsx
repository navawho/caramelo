import React, { useRef, useCallback } from 'react';
import { FiImage } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import Pet from '../../interfaces/Pet';

interface UpdatePetData {
	name?: string;
	port?: 'Pequeno' | 'Médio' | 'Grande';
	type?: 'Cachorro' | 'Gato';
	sex?: 'Macho' | 'Fêmea';
	description?: string;
	birthDate?: string;
	imageUrl?: string;
	available?: boolean;
}

interface ModalProps {
	isOpen: boolean;
	setIsOpen: () => void;
	handleEditPet?: (pet: UpdatePetData) => void;
	pet: Pet;
}

const ModalEditPet: React.FC<ModalProps> = ({
	isOpen,
	setIsOpen,
	handleEditPet,
	pet,
}) => {
	const formRef = useRef<FormHandles>(null);

	// const handleSubmit = useCallback(
	// 	async (data: UpdatePetData) => {
	// 		handleEditPet(data);

	// 		setIsOpen();
	// 	},
	// 	[handleEditPet, setIsOpen],
	// );

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<Form ref={formRef} onSubmit={() => {}}>
				<h1>Novo Pet</h1>
				<Input name="image" placeholder="Cole o link aqui" icon={FiImage} defaultValue={pet.imageUrl} />

				<Input name="name" placeholder="Nome" defaultValue={pet.name} />
				<Input name="port" placeholder="Porte" defaultValue={pet.port} />
				<Input name="sex" placeholder="Sexo" defaultValue={pet.sex} />
				<Input name="type" placeholder="Tipo" defaultValue={pet.type} />
				<Input name="birthDate" placeholder="Data de nascimento ANO-MES-DIA" defaultValue={pet.birthDate} />

				<Input name="description" placeholder="Descrição" defaultValue={pet.description} />
				<button type="submit" className="action-button">
					Atualizar
				</button>
			</Form>
		</Modal>
	);
};

export default ModalEditPet;
