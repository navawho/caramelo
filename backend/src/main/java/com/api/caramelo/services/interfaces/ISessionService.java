package com.api.caramelo.services.interfaces;

public interface ISessionService {
    Long validateCredentials(String username, String password);
}
