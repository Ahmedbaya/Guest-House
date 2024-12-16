package com.maison.d.hote.projet.Services;

import com.maison.d.hote.projet.Entity.client;
import com.maison.d.hote.projet.Entity.offre;
import com.maison.d.hote.projet.Entity.reservation;
import com.maison.d.hote.projet.Repository.ReservationRepository;
import com.maison.d.hote.projet.beans.CommandeRq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ReservationServiceImpl implements ReservationServices{
    @Autowired
    OffreServices offreServices;
    @Autowired
    ReservationRepository reservationRepository;
    @Autowired
    ClientServices clientServices;
    @Override
    public reservation ajouterReservation(CommandeRq commandeRq) {
        Optional<offre>offre=offreServices.afficherOffreById(commandeRq.getId_offre());
        Optional<client>client=clientServices.afficherClientById(commandeRq.getId_client());
        if(offre.isPresent()&& client.isPresent()){
            reservation reservation=new reservation();
            reservation.setOffre(offre.get());
            reservation.setClient(client.get());
            return reservationRepository.save(reservation);
        }
        else{
            return null;
        }
    }

    @Override
    public List<reservation> listeReservation() {
        return reservationRepository.findAll();
    }

    @Override
    public Optional<reservation> getReservationById(Long id) {
        return reservationRepository.findById(id);
    }

    @Override
    public List<reservation> listeOffresByClient(Long id) {
        return reservationRepository.findByClientId(id);
    }

}
