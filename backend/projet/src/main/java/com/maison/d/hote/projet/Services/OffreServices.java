package com.maison.d.hote.projet.Services;

import com.maison.d.hote.projet.Entity.admin;
import com.maison.d.hote.projet.Entity.offre;

import java.util.List;
import java.util.Optional;

public interface OffreServices {

    offre ajouterOffre(offre offre);

    void supprimerOffre(Long id);
    List<offre> afficherOffre();

    offre modiferOffre(offre offre);

    Optional<offre> afficherOffreById(Long id);

}
