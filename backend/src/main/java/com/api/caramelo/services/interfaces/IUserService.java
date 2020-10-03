package com.api.caramelo.services.interfaces;

import com.api.caramelo.controllers.dtos.UserDTO;
import com.api.caramelo.exceptions.ErrorsWrapperException;
import com.api.caramelo.models.User;

import java.util.List;

public interface IUserService {

    List<User> search();

    User create(UserDTO userDto);

    ErrorsWrapperException validate(UserDTO userDto);
}
