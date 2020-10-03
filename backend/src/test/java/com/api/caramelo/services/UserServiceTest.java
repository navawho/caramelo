package com.api.caramelo.services;

import com.api.caramelo.controllers.dtos.UserDTO;
import com.api.caramelo.exceptions.ErrorsWrapperException;
import com.api.caramelo.models.User;
import com.api.caramelo.repositories.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
public class UserServiceTest {

    @SpyBean
    UserService service;

    @MockBean
    UserRepository repository;

    @Test
    public void shouldCreateUserWithSucess() {
        User user = User.builder().id(1l).username("user").password("123456").email("user@email.com").phone("8898767654").build();
        UserDTO userDto = UserDTO.builder().username("user").password("123456").email("user@email.com").phone("8898767654").build();
        Mockito.when(repository.save(Mockito.any(User.class))).thenReturn(user);

        User result = service.create(userDto);

        assertThat(result).isNotNull().isEqualTo(user);
    }

    @Test
    public void shouldReturnAnErrorWhenUsernameAlreadyExists() {
        User userThatAlreadyExists = User.builder().id(1l).username("user1").build();
        UserDTO userDto = UserDTO.builder().username("user1").build();
        Mockito.when(repository.findByUsername("user1")).thenReturn(userThatAlreadyExists);

        try {
            service.create(userDto);
        } catch(ErrorsWrapperException e) {
            assertThat(e.getErrors()).contains("Username já está em uso.");
            Mockito.verify(repository, Mockito.never()).save(Mockito.any(User.class));
        }
    }

    @Test
    public void shouldReturnAnErrorWhenEmailAlreadyExists() {
        User userThatAlreadyExists = User.builder().id(1l).email("email@email.com").build();
        UserDTO userDto = UserDTO.builder().email("email@email.com").build();
        Mockito.when(repository.findByEmail("user@email.com")).thenReturn(userThatAlreadyExists);

        try {
            service.create(userDto);
        } catch(ErrorsWrapperException e) {
            assertThat(e.getErrors()).contains("Email já está em uso.");
            Mockito.verify(repository, Mockito.never()).save(Mockito.any(User.class));
        }
    }

    @Test
    public void shouldReturnAnErrorWhenPhoneAlreadyExists() {
        User userThatAlreadyExists = User.builder().id(1l).phone("88987658746").build();
        UserDTO userDto = UserDTO.builder().phone("88987658746").build();
        Mockito.when(repository.findByPhone("88987658746")).thenReturn(userThatAlreadyExists);

        try {
            service.create(userDto);
        } catch(ErrorsWrapperException e) {
            assertThat(e.getErrors()).contains("Telefone já está em uso.");
            Mockito.verify(repository, Mockito.never()).save(Mockito.any(User.class));
        }
    }
}

