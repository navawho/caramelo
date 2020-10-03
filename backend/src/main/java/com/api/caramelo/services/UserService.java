package com.api.caramelo.services;

import com.api.caramelo.controllers.dtos.UserDTO;
import com.api.caramelo.exceptions.ErrorsWrapperException;
import com.api.caramelo.models.User;
import com.api.caramelo.repositories.UserRepository;
import com.api.caramelo.services.interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.Objects.isNull;
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
    public User create(UserDTO userDto) {
        ErrorsWrapperException errors = new ErrorsWrapperException();

        errors.addErrors(this.validate(userDto).getErrors());

        if (nonNull(repository.findByUsername(userDto.getUsername()))) {
            errors.addError("Username já está em uso.");
        }

        if (nonNull(repository.findByEmail(userDto.getEmail()))) {
            errors.addError("Email já está em uso.");
        }

        if (nonNull(repository.findByPhone(userDto.getPhone()))) {
            errors.addError("Telefone já está em uso.");
        }

        if (errors.hasSomeError()) {
            throw errors;
        }

        User user = User.builder()
                .username(userDto.getUsername())
                .password(userDto.getPassword())
                .email(userDto.getEmail())
                .phone(userDto.getPhone()).build();

        return repository.save(user);
    }

    @Override
    public ErrorsWrapperException validate(UserDTO userDto) {
        ErrorsWrapperException errors = new ErrorsWrapperException();

        String username = userDto.getUsername();

        String password = userDto.getPassword();

        String email = userDto.getEmail();

        String phone = userDto.getPhone();

        if (isNull(username)) {
           errors.addError("Username é obrigatório.");
        } else if(username.length() < 4) {
            errors.addError("Username precisa ter no mínimo 4 caracteres.");
        }

        if (isNull(password)) {
            errors.addError("Senha é obrigatória.");
        } else if (password.length() < 6) {
            errors.addError("Senha precisa ter no mínimo 6 caracteres.");
        }

        if (!password.equals(userDto.getConfirmPassword())) {
            errors.addError("Senhas não batem.");
        }

        if (isNull(email)) {
            errors.addError("Email é obrigatório.");
        } else if (!email.matches("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
            errors.addError("Email inválido.");
        }

        if (isNull(phone)) {
            errors.addError("Telefone é obrigatório.");
        } else if(!phone.matches("^(([\\d]{4}[-.\\s]{1}[\\d]{2,3}[-.\\s]{1}[\\d]{2}[-.\\s]{1}[\\d]{2})|([\\d]{4}[-.\\s]{1}[\\d]{3}[-.\\s]{1}[\\d]{4})|((\\(?\\+?[0-9]{2}\\)?\\s?)?(\\(?\\d{2}\\)?\\s?)?\\d{4,5}[-.\\s]?\\d{4}))$")) {
            errors.addError("Telefone inválido.");
        }

        return errors;
    }
}
