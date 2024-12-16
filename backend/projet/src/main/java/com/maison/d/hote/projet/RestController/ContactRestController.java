package com.maison.d.hote.projet.RestController;

import com.maison.d.hote.projet.Entity.contact;
import com.maison.d.hote.projet.Repository.ContactRepository;
import com.maison.d.hote.projet.Services.ContactServices;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value ="/contact")
public class ContactRestController {

        @Autowired
        ContactServices contactServices ;
        private ContactRepository contactRepository;

        @Autowired

        public ContactRestController(ContactRepository contactRepository) {
            this.contactRepository = contactRepository;



        }
        @RequestMapping(method = RequestMethod.POST )

        public contact ajoutContact(@RequestBody contact contact){
            com.maison.d.hote.projet.Entity.contact savedUser = contactRepository.save(contact);
            return contactServices.ajouterContact(contact);


        }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public void suppContact(@PathVariable("id") Long id){
        contactServices.supprimerContact(id);

    }
    @RequestMapping(method = RequestMethod.GET )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public List<contact> afficherContact(){
        return contactServices.afficherContact();

    }
    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<contact> getContactById(@PathVariable("id") Long id){

        Optional<contact> contact = contactServices.afficherContactById(id);
        return contact;
    }




}
