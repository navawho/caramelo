package com.api.caramelo.services.interfaces;

import com.api.caramelo.controllers.dtos.UserDTO;

public interface ISessionService {
    Long validateCredentials(UserDTO dto);
}
