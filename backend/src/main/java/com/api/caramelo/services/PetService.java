package com.api.caramelo.services;

import com.api.caramelo.exceptions.BusinessRuleException;
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

import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.contains;
import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.exact;

@Service
@RequiredArgsConstructor
public class PetService implements IPetService {

    private final PetRepository petRepository;
    private final UserRepository userRepository;

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
}
