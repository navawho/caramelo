package com.api.caramelo.services.interfaces;

import com.api.caramelo.controllers.dtos.CreateUserDTO;
import com.api.caramelo.controllers.dtos.UpdateUserDTO;
import com.api.caramelo.models.User;

import java.util.List;

public interface IUserService {

    List<User> search();

    User create(CreateUserDTO userDTO);

    User update(UpdateUserDTO userDTO, Long userId);
}
