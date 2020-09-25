package com.api.caramelo.services;

import com.api.caramelo.models.User;
import com.api.caramelo.repositories.UserRepository;
import com.api.caramelo.services.interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {

    private final UserRepository repository;

    @Override
    public List<User> search() {
        return repository.findAll();
    }
}
