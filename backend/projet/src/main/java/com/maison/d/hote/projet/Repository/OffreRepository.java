package com.maison.d.hote.projet.Repository;

import com.maison.d.hote.projet.Entity.admin;
import com.maison.d.hote.projet.Entity.offre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OffreRepository extends JpaRepository<offre,Long> {
}
