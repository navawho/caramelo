package com.api.caramelo.controllers.dtos;

import lombok.Data;

@Data
public class UserDTO {
    private String username;
    private String password;
    private String confirmPassword;
    private String email;
    private String phone;
}
