package com.maison.d.hote.projet.Services;

import com.maison.d.hote.projet.Entity.client;

import java.util.List;
import java.util.Optional;

public interface ClientServices {
    client modiferClient(client client);

    client ajouterClient(client client);

    void supprimerClient(Long id);

    List<client> afficherClient();

    Optional<client> afficherClientById(Long id);

}
