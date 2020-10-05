package com.api.caramelo.repositories;

import com.api.caramelo.models.Pet;
import com.api.caramelo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PetRepository extends JpaRepository<Pet, Long> {
    List<Pet> findPetsByUserIsNotAndAvailableIsTrue(User user);
}
