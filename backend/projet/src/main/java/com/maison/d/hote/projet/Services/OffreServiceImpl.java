package com.maison.d.hote.projet.Services;

import com.maison.d.hote.projet.Entity.offre;
import com.maison.d.hote.projet.Repository.OffreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
    public class OffreServiceImpl implements OffreServices{
    @Autowired
    OffreRepository offreRepository;
    @Override
    public offre ajouterOffre(offre offre) {
        return offreRepository.save(offre);
    }



    @Override
    public void supprimerOffre(Long id) {
        offreRepository.deleteById(id);

    }

    @Override
    public List<offre> afficherOffre() {
        return offreRepository.findAll();
    }
    @Override
    public offre modiferOffre(offre offre) {
        return offreRepository.save(offre);
    }



    @Override
    public Optional<offre> afficherOffreById(Long id) {
        return offreRepository.findById(id);
    }
}
