package com.api.caramelo.services;

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
        User user = User.builder().id(1l).username("username").password("123456").email("user@email.com").phone("8898767654").build();
        Mockito.when(repository.save(Mockito.any(User.class))).thenReturn(user);

        User result = service.create(user);

        assertThat(result).isNotNull().isEqualTo(user);
    }
}

