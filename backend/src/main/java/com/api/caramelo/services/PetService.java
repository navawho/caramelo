package com.api.caramelo.services;

import com.api.caramelo.models.Pet;
import com.api.caramelo.repositories.PetRepository;
import com.api.caramelo.services.interfaces.IPetService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PetService implements IPetService {

    private final PetRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<Pet> search() {
        return repository.findAll();
    }
}
