package com.api.caramelo.services.interfaces;

import com.api.caramelo.controllers.dtos.CreateUserDTO;

public interface ISessionService {
    Long validateCredentials(CreateUserDTO dto);
}
