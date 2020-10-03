package com.api.caramelo.controllers;

import com.api.caramelo.controllers.dtos.UserDTO;
import com.api.caramelo.models.User;
import com.api.caramelo.services.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private UserService service;

    @Test
    public void shouldCreateUserWithSucess() throws Exception {
        LocalDateTime currentDate = LocalDateTime.of(LocalDate.now(), LocalTime.now());
        UserDTO userDto = UserDTO.builder().username("user1").password("123456").confirmPassword("123456").email("user@email.com").phone("8898767654").build();
        User user = User.builder().id(1l).username("user1").password("123456").email("user@email.com").phone("8898767654").createdAt(currentDate).build();

        Mockito.when(service.create(Mockito.any(UserDTO.class))).thenReturn(user);

        mockMvc.perform(post("/users")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(userDto)))
                .andExpect(status().isOk())
                .andExpect(content()
                        .json("{'id':1,'username':'user1','email': 'user@email.com','phone':'8898767654'," + "'createdAt':'" + currentDate.toString() + "', 'updatedAt':null}"));
    }

    @Test
    public void shouldReturnErrorWhenPasswordsDoesNotMatch() throws Exception {
        UserDTO userDto = UserDTO.builder().password("123456").confirmPassword("12345").build();

        mockMvc.perform(post("/users")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(userDto)))
                .andExpect(status().isBadRequest())
                .andExpect(content()
                        .json("{ 'message':'Senhas não batem.' }"));
    }
}
