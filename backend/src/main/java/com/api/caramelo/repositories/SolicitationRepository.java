package com.api.caramelo.repositories;

import com.api.caramelo.models.Solicitation;
import com.api.caramelo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SolicitationRepository extends JpaRepository<Solicitation, Long> {
    List<Solicitation> findByUser(User user);
}
