package com.maison.d.hote.projet.RestController;

import com.maison.d.hote.projet.Entity.offre;
import com.maison.d.hote.projet.Entity.reservation;
import com.maison.d.hote.projet.Services.ReservationServices;
import com.maison.d.hote.projet.beans.CommandeRq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin("*")
@RequestMapping(value ="/reservation")
public class ReservationRestController {
    @Autowired
    ReservationServices reservationService;

    @RequestMapping(method= RequestMethod.POST)
    public reservation ajouterReservation(@RequestBody CommandeRq commandeRq){
        return reservationService.ajouterReservation(commandeRq);
    }

    @RequestMapping("Get-All-ByIdClient/{id}")
    public List<reservation> ListReservationByClient(@PathVariable Long id){
        return reservationService.listeOffresByClient(id);
    }

    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public Optional<reservation> GetReservationById(@PathVariable Long id){
        Optional<reservation> reservation=reservationService.getReservationById(id);
        return reservation;
    }
    @RequestMapping(method = RequestMethod.GET )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public List<reservation> afficherReservation(){
        return reservationService.listeReservation();
}}
