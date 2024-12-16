package com.maison.d.hote.projet.Services;

import com.maison.d.hote.projet.Entity.admin;
import com.maison.d.hote.projet.Entity.contact;

import java.util.List;
import java.util.Optional;

public interface ContactServices {


    contact ajouterContact(contact contact);
    void supprimerContact(Long id);

    List<contact> afficherContact();


    Optional<contact> afficherContactById(Long id);
}
