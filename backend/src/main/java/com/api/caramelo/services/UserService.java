package com.api.caramelo.services;

import com.api.caramelo.controllers.dtos.CreateUserDTO;
import com.api.caramelo.controllers.dtos.UpdateUserDTO;
import com.api.caramelo.exceptions.BusinessRuleException;
import com.api.caramelo.exceptions.error.ErrorObject;
import com.api.caramelo.models.User;
import com.api.caramelo.repositories.UserRepository;
import com.api.caramelo.services.interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static java.util.Objects.nonNull;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {

    private final UserRepository repository;

    @Override
    public List<User> search() {
        return repository.findAll();
    }

    @Override
    public User create(CreateUserDTO userDTO) {
        this.checkIfAlreadyExists(userDTO.getUsername(), userDTO.getEmail(), userDTO.getPhone());

        User user = User.builder()
                .username(userDTO.getUsername())
                .password(userDTO.getPassword())
                .email(userDTO.getEmail())
                .phone(userDTO.getPhone()).build();

        return repository.save(user);
    }

    @Override
    public User update(UpdateUserDTO userDTO, Long userId) {
        this.checkIfAlreadyExists(userDTO.getUsername(), userDTO.getEmail(), userDTO.getPhone());

        Optional<User> userFromDb = repository.findById(userId);

        if (userFromDb.isEmpty()) {
            throw new BusinessRuleException("Usuário com esse token não existe.");
        }

        return repository.save(userFromDb.get());
    }

    public void checkIfAlreadyExists(String username, String email, String phone) {
        BusinessRuleException businessRuleException = new BusinessRuleException("Requisição possui campos inválidos.");

        if (nonNull(username) && nonNull(repository.findByUsername(username))) {
            businessRuleException.addError(new ErrorObject("Já existe usuário com esse Username.", "username", username));
        }

        if (nonNull(email) && nonNull(repository.findByEmail(email))) {
            businessRuleException.addError(new ErrorObject("Já existe usuário com esse E-mail.", "email", email));
        }

        if (nonNull(phone) && nonNull(repository.findByPhone(phone))) {
            businessRuleException.addError(new ErrorObject("Já existe usuário com esse Telefone.", "phone", phone));
        }

        if (businessRuleException.checkHasSomeError()) {
            throw businessRuleException;
        }
    }

}
