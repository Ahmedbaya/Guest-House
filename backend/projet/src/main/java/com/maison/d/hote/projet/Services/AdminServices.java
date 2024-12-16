package com.maison.d.hote.projet.Services;

import com.maison.d.hote.projet.Entity.admin;

import java.util.List;
import java.util.Optional;

public interface AdminServices {
    admin ajouterAdmin(admin admin);
    admin modiferAdmin(admin admin);
    void supprimerAdmin(Long id);
    List<admin> afficherAdmin();
    Optional<admin> afficherAdminById(Long id);
}
