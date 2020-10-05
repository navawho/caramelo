package com.api.caramelo.services.interfaces;

import com.api.caramelo.models.Pet;

import java.util.List;

public interface IPetService {

    List<Pet> search(Pet pet, Long userId);
}
