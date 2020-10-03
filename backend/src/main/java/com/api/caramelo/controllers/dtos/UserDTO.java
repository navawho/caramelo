package com.api.caramelo.controllers.dtos;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDTO {
    private String username;
    private String password;
    private String confirmPassword;
    private String email;
    private String phone;
}
