package com.api.caramelo.services.interfaces;

import com.api.caramelo.controllers.dtos.CreatePetDTO;
import com.api.caramelo.controllers.dtos.UpdatePetDTO;
import com.api.caramelo.models.Pet;

import java.util.List;

public interface IPetService {

    List<Pet> search(Pet pet, Long userId);

    Pet create(CreatePetDTO petDTO);

    Pet update(UpdatePetDTO petDTO, Long userId);

    void delete(Long petId);
}
