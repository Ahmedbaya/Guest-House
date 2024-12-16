package com.maison.d.hote.projet.Repository;

import com.maison.d.hote.projet.Entity.reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends JpaRepository<reservation,Long> {
    List<reservation> findByClientId(Long id);

}
