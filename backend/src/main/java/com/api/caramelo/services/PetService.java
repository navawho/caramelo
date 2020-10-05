package com.api.caramelo.services;

import com.api.caramelo.controllers.dtos.CreatePetDTO;
import com.api.caramelo.controllers.dtos.UpdatePetDTO;
import com.api.caramelo.controllers.dtos.UpdateUserDTO;
import com.api.caramelo.exceptions.BusinessRuleException;
import com.api.caramelo.exceptions.error.ErrorObject;
import com.api.caramelo.models.Pet;
import com.api.caramelo.models.User;
import com.api.caramelo.repositories.PetRepository;
import com.api.caramelo.repositories.UserRepository;
import com.api.caramelo.services.interfaces.IPetService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Optional;

import static java.util.Objects.nonNull;
import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.contains;
import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.exact;

@Service
@RequiredArgsConstructor
public class PetService implements IPetService {

    private final PetRepository petRepository;
    private final UserRepository userRepository;

    @Override
    public Pet create(CreatePetDTO petDTO) {
        this.checkIfAlreadyExists(petDTO.getName());

        Pet pet = Pet.builder()
                .name(petDTO.getName())
                .sex(petDTO.getSex())
                .type(petDTO.getType())
                .port(petDTO.getPort()).build();

        return petRepository.save(pet);
    }

    @Override
    public Pet update(UpdatePetDTO petDTO, Long petId) {
        this.checkIfAlreadyExists(petDTO.getName());

        Optional<Pet> pet = petRepository.findById(petId);

        if (pet.isEmpty()) {
            throw new BusinessRuleException("Impossível atualizar as informações de um Pet inexistente.");
        }

        return petRepository.save(pet.get());
    }

    @Override
    public void delete(Long petId) {
        petRepository.deleteById(petId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Pet> search(Pet petFilter, Long userId) {

        Optional<User> user = userRepository.findById(userId);

        if(user.isEmpty()) {
            throw new BusinessRuleException("Usuário com esse token não existe.");
        }

        petFilter.setAvailable(true);

        ExampleMatcher matcher = ExampleMatcher.matchingAll().withIgnoreCase()
                .withMatcher("name", contains())
                .withMatcher("port", exact())
                .withMatcher("type", exact())
                .withMatcher("sex", exact())
                .withMatcher("available", exact());

        Example example = Example.of(petFilter, matcher);

        return petRepository.findAll(example);
    }

    private void checkIfAlreadyExists(String name) {
        BusinessRuleException businessRuleException = new BusinessRuleException("Requisição possui campos inválidos.");

        if (nonNull(name) && nonNull(petRepository.findPetByName(name))) {
            businessRuleException.addError(new ErrorObject("Já existe um Pet com esse nome.", "name", name));
        }

        if (businessRuleException.checkHasSomeError()) {
            throw businessRuleException;
        }
    }

}
