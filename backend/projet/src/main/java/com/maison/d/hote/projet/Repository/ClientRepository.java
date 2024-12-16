package com.maison.d.hote.projet.Repository;

import com.maison.d.hote.projet.Entity.admin;
import com.maison.d.hote.projet.Entity.client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<client,Long> {
    client findClientByEmail(String email);

}
