package com.api.caramelo.controllers;

import com.api.caramelo.controllers.dtos.CreateUserDTO;
import com.api.caramelo.controllers.dtos.UpdateUserDTO;
import com.api.caramelo.exceptions.BusinessRuleException;
import com.api.caramelo.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @PostMapping
    public ResponseEntity store(@RequestBody @Valid CreateUserDTO userDTO) {
        try {
            return ok(service.create(userDTO));
        } catch (BusinessRuleException e) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", e.getMessage());
            map.put("errors", e.getErrors());

            return badRequest().body(map);
        }
    }

    @PatchMapping
    public ResponseEntity update(@RequestBody UpdateUserDTO userDTO, HttpServletRequest request) {
        try {
            Long userId = (Long) request.getAttribute("userId");
            
            return ok(service.update(userDTO, userId));
        } catch (BusinessRuleException e) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", e.getMessage());

            if(e.checkHasSomeError()){
                map.put("errors", e.getErrors());
            }

            return badRequest().body(map);
        }
    }

    @GetMapping
    public ResponseEntity show(HttpServletRequest request) {
        try {
            Long userId = (Long) request.getAttribute("userId");

            return ok(service.search(userId));
        } catch (BusinessRuleException e) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", e.getMessage());

            return badRequest().body(map);
        }
    }
}
