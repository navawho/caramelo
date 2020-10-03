package com.api.caramelo.controllers;

import com.api.caramelo.controllers.dtos.UserDTO;
import com.api.caramelo.models.User;
import com.api.caramelo.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @GetMapping
    public ResponseEntity index() {
        return ok(service.search());
    }

    @PostMapping
    public ResponseEntity store(@RequestBody UserDTO dto) {
        if (!dto.getPassword().equals(dto.getConfirmPassword())) {
            Map<String, String> map = new HashMap<>();
            map.put("message", "Senhas não batem.");
            return badRequest().body(map);
        }

        User user = User.builder()
                    .username(dto.getUsername())
                    .password(dto.getPassword())
                    .email(dto.getEmail())
                    .phone(dto.getPhone()).build();

        return ok(service.create(user));
    }
}
