package com.api.caramelo.services;

import com.api.caramelo.exceptions.BusinessRuleException;
import com.api.caramelo.models.User;
import com.api.caramelo.repositories.UserRepository;
import com.api.caramelo.services.interfaces.ISessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import static org.mindrot.jbcrypt.BCrypt.checkpw;

@Service
@RequiredArgsConstructor
public class SessionService implements ISessionService {

    private final UserRepository repository;

    @Override
    public Long validateCredentials(String username, String password) {
        User user = repository.findByUsername(username);

        if (!checkpw(password, user.getPassword())) {
            throw new BusinessRuleException("Credenciais inválidas.");
        }

        return user.getId();
    }
}
