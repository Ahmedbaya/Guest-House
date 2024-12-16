package com.maison.d.hote.projet.Services;

import com.maison.d.hote.projet.Entity.client;
import com.maison.d.hote.projet.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements ClientServices{
    @Autowired
    ClientRepository clientRepository;
    @Override
    public client ajouterClient(client client) {
        return clientRepository.save(client);
    }

    @Override
    public client modiferClient(client client) {
        return clientRepository.save(client);
    }

    @Override
    public void supprimerClient(Long id) {
        clientRepository.deleteById(id);

    }

    @Override
    public List<client> afficherClient() {
        return clientRepository.findAll();
    }

    @Override
    public Optional<client> afficherClientById(Long id) {
        return clientRepository.findById(id);
    }


}
