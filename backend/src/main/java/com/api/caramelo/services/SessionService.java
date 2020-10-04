package com.api.caramelo.services;

import com.api.caramelo.controllers.dtos.CreateUserDTO;
import com.api.caramelo.models.User;
import com.api.caramelo.repositories.UserRepository;
import com.api.caramelo.services.interfaces.ISessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SessionService implements ISessionService {

    private final UserRepository repository;

    @Override
    public Long validateCredentials(CreateUserDTO dto) {
        User user = repository.findByUsername(dto.getUsername());

        return user.getId();
    }
}
