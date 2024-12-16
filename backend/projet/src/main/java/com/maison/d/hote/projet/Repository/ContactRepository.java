package com.maison.d.hote.projet.Repository;

import com.maison.d.hote.projet.Entity.client;
import com.maison.d.hote.projet.Entity.contact;
import com.maison.d.hote.projet.Entity.offre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<contact,Long> {
    contact findContactByEmail(String email);

}
