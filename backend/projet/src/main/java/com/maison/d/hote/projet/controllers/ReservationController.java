package com.maison.d.hote.projet.controllers;

import com.maison.d.hote.projet.Entity.reservation;
import com.maison.d.hote.projet.Services.ReservationServices;
import com.maison.d.hote.projet.beans.CommandeRq;
import jakarta.persistence.Entity;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;


@RestController

public class ReservationController {
    @Autowired
    ReservationServices reservationServices;
    @RequestMapping(method = RequestMethod.POST)
    public reservation ajouterReservation (@RequestBody CommandeRq commandeRq){
        return reservationServices.ajouterReservation(commandeRq);
    }
    @RequestMapping("get-all-by-id-client/{id}")
    public List<reservation> getReservationByClientId(@PathVariable Long id){
        return reservationServices.listeOffresByClient(id);
    }



    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<reservation> getReservationById(@PathVariable("id") Long id){

        Optional<reservation> reservation = reservationServices.getReservationById(id);
        return reservation;
    }
}
