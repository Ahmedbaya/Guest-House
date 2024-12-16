package com.maison.d.hote.projet.Services;

import com.maison.d.hote.projet.Entity.reservation;
import com.maison.d.hote.projet.beans.CommandeRq;

import java.util.List;
import java.util.Optional;

public interface ReservationServices {
    reservation ajouterReservation(CommandeRq commandeRq);
    List<reservation> listeReservation();


    Optional<reservation> getReservationById(Long id);

    List<reservation> listeOffresByClient(Long id);

}
