package com.api.caramelo.services.interfaces;

import com.api.caramelo.models.User;

import java.util.List;

public interface IUserService {

    List<User> search();

    User create(User user);
}
