package com.api.caramelo.controllers;

import com.api.caramelo.controllers.dtos.CreatePetDTO;
import com.api.caramelo.controllers.dtos.CreateUserDTO;
import com.api.caramelo.controllers.dtos.UpdatePetDTO;
import com.api.caramelo.controllers.dtos.UpdateUserDTO;
import com.api.caramelo.exceptions.BusinessRuleException;
import com.api.caramelo.models.Pet;
import com.api.caramelo.services.PetService;
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
@RequestMapping("/pets")
@RequiredArgsConstructor
public class PetController {

    private final PetService service;

    @PostMapping
    public ResponseEntity store(@RequestBody @Valid CreatePetDTO petDTO, HttpServletRequest request) {
        try {
            Long userId = (Long) request.getAttribute("userId");

            return ok(service.create(petDTO, userId));
        } catch (BusinessRuleException e) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", e.getMessage());

            if(e.checkHasSomeError()) {
                map.put("errors", e.getErrors());
            }

            return badRequest().body(map);
        }
    }

    @PatchMapping("{petId}")
    public ResponseEntity update(@RequestBody UpdatePetDTO petDTO, @PathVariable Long petId, HttpServletRequest request) {
        try {
            Long userId = (Long) request.getAttribute("userId");

            return ok(service.update(petDTO, petId, userId));
        } catch (BusinessRuleException e) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", e.getMessage());

            if(e.checkHasSomeError()){
                map.put("errors", e.getErrors());
            }

            return badRequest().body(map);
        }
    }

    @DeleteMapping("{petId}")
    public ResponseEntity delete(@PathVariable Long petId, HttpServletRequest request) {
        try {
            Long userId = (Long) request.getAttribute("userId");

            service.delete(petId, userId);
            return ok().build();

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
