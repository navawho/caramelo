package com.api.caramelo.controllers;

import com.api.caramelo.exceptions.BusinessRuleException;
import com.api.caramelo.models.Pet;
import com.api.caramelo.services.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.ResponseEntity.badRequest;
import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/pets")
@RequiredArgsConstructor
public class PetController {

    private final PetService service;

    @GetMapping
    public ResponseEntity index(
            @RequestParam(value = "sex", required = false) String sex,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "port", required = false) String port,
            HttpServletRequest request) {
        try {
            Long userId = (Long) request.getAttribute("userId");
            Pet petFilter = Pet.builder().name(name).sex(sex).type(type).port(port).build();

            return ok(service.search(petFilter, userId));
        } catch (BusinessRuleException e) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", e.getMessage());

            return badRequest().body(map);
        }
    }
}
