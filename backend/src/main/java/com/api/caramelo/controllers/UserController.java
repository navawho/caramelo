package com.api.caramelo.controllers;

import com.api.caramelo.controllers.dtos.UserDTO;
import com.api.caramelo.exceptions.ErrorsWrapperException;
import com.api.caramelo.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
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
    public ResponseEntity store(@RequestBody UserDTO userDto) {
        try {
            return ok(service.create(userDto));
        } catch(ErrorsWrapperException e) {
            Map<String, List> body = new HashMap<>();
            body.put("errors", e.getErrors());

            return new ResponseEntity<>(body, BAD_REQUEST);
        }
    }
}
