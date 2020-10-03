package com.api.caramelo.controllers;

import com.api.caramelo.JwtConstants;
import com.api.caramelo.controllers.dtos.UserDTO;
import com.api.caramelo.models.User;
import com.api.caramelo.services.PetService;
import com.api.caramelo.services.SessionService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequiredArgsConstructor
public class SessionController {

    private final SessionService service;

    @PostMapping("/login")
    public ResponseEntity store(@RequestBody UserDTO dto) {
        Long userId = service.validateCredentials(dto);

        return ok(this.generateJWTToken(userId));
    }

    private Map<String, String> generateJWTToken(Long userId) {
        long timestamp = System.currentTimeMillis();
        String token = Jwts.builder().signWith(SignatureAlgorithm.HS256, JwtConstants.API_SECRET_KEY)
                .setIssuedAt(new Date(timestamp))
                .setExpiration(new Date(timestamp + JwtConstants.TOKEN_VALIDITY))
                .claim("userId", userId)
                .compact();
        Map<String, String> map = new HashMap<>();
        map.put("token", token);
        return map;
    }
}