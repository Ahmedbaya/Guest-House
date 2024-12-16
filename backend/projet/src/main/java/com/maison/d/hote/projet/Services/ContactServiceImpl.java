package com.maison.d.hote.projet.Services;
import com.maison.d.hote.projet.Entity.contact;
import com.maison.d.hote.projet.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactServices {
    @Autowired
    ContactRepository contactRepository;

    @Override
    public contact ajouterContact(contact contact) {
        return contactRepository.save(contact);
    }



    @Override
    public List<contact> afficherContact() {
        return contactRepository.findAll();
    }

    @Override
    public void supprimerContact(Long id) {
        contactRepository.deleteById(id);

    }


    @Override
    public Optional<contact> afficherContactById(Long id) {
        return contactRepository.findById(id);
    }
}

