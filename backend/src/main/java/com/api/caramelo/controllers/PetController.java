package com.api.caramelo.controllers;

import com.api.caramelo.services.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/pets")
@RequiredArgsConstructor
public class PetController {

    private final PetService service;

    @GetMapping
    public ResponseEntity index(HttpServletRequest request) {
        int userId = (Integer) request.getAttribute("userId");

        return ok(userId);
    }
}
