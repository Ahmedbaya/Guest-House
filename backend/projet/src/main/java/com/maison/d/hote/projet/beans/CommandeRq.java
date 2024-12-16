package com.maison.d.hote.projet.beans;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@NoArgsConstructor
public class CommandeRq {
    private Long id_client;
    private Long id_offre;

    public Long getId_client() {
        return id_client;
    }

    public void setId_client(Long id_client) {
        this.id_client = id_client;
    }

    public Long getId_offre() {
        return id_offre;
    }

    public void setId_offre(Long id_offre) {
        this.id_offre = id_offre;
    }


    public CommandeRq(Long id_client, Long id_offre) {
        this.id_client = id_client;
        this.id_offre = id_offre;
    }
}
