package com.maison.d.hote.projet.RestController;

import com.maison.d.hote.projet.Entity.offre;
import com.maison.d.hote.projet.Repository.OffreRepository;
import com.maison.d.hote.projet.Services.OffreServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/offre")
public class OffreRestController {

    private final OffreRepository offreRepository;

    @Autowired
    OffreServices offreServices;

    @Autowired
    public OffreRestController(OffreRepository offreRepository) {
        this.offreRepository = offreRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<offre> ajoutOffre(
            @RequestParam("nom") String nom,
            @RequestParam("prix") String prix,
            @RequestParam("date_deb") String dateDeb,
            @RequestParam("date_fin") String dateFin,
            @RequestParam(value = "photo", required = false) MultipartFile photo) {
        try {
            offre offre = new offre();
            offre.setNom(nom);
            offre.setPrix(prix);
            offre.setDate_deb(dateDeb);
            offre.setDate_fin(dateFin);

            // Save the photo if provided
            if (photo != null && !photo.isEmpty()) {
                String uploadDir = "uploads/";
                String fileName = System.currentTimeMillis() + "_" + photo.getOriginalFilename();
                File uploadFile = new File(uploadDir, fileName);
                if (!uploadFile.getParentFile().exists()) {
                    uploadFile.getParentFile().mkdirs();
                }
                photo.transferTo(uploadFile);
                offre.setPhotoPath(uploadDir + fileName);
            }

            // Save the offre object to the database
            offre savedOffre = offreRepository.save(offre);
            return ResponseEntity.ok(savedOffre);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<offre> modifieroffre(
            @PathVariable("id") Long id,
            @RequestParam("nom") String nom,
            @RequestParam("prix") String prix,
            @RequestParam("date_deb") String dateDeb,
            @RequestParam("date_fin") String dateFin,
            @RequestParam(value = "photo", required = false) MultipartFile photo) {
        try {
            Optional<offre> existingOffreOpt = offreRepository.findById(id);
            if (!existingOffreOpt.isPresent()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            offre existingOffre = existingOffreOpt.get();

            existingOffre.setNom(nom);
            existingOffre.setPrix(prix);
            existingOffre.setDate_deb(dateDeb);
            existingOffre.setDate_fin(dateFin);

            // Save the new photo if provided
            if (photo != null && !photo.isEmpty()) {
                String uploadDir = "uploads/";
                String fileName = System.currentTimeMillis() + "_" + photo.getOriginalFilename();
                File uploadFile = new File(uploadDir, fileName);
                if (!uploadFile.getParentFile().exists()) {
                    uploadFile.getParentFile().mkdirs();
                }
                photo.transferTo(uploadFile);
                existingOffre.setPhotoPath(uploadDir + fileName);
            }

            // Save updated offre
            offre updatedOffre = offreRepository.save(existingOffre);
            return ResponseEntity.ok(updatedOffre);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> suppOffre(@PathVariable("id") Long id) {
        offreServices.supprimerOffre(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<offre> afficherOffre() {
        return offreServices.afficherOffre();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<offre> getOffreById(@PathVariable("id") Long id) {
        Optional<offre> offreOpt = offreServices.afficherOffreById(id);
        if (offreOpt.isPresent()) {
            return ResponseEntity.ok(offreOpt.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
