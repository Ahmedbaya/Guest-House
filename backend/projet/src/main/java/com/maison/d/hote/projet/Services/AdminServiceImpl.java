package com.maison.d.hote.projet.Services;
import com.maison.d.hote.projet.Entity.admin;
import com.maison.d.hote.projet.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AdminServiceImpl implements AdminServices{
    @Autowired
    AdminRepository adminRepository;
    @Override
    public admin ajouterAdmin(admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public admin modiferAdmin(admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public void supprimerAdmin(Long id) {
        adminRepository.deleteById(id);

    }

    @Override
    public List<admin> afficherAdmin() {
        return adminRepository.findAll();
    }

    @Override
    public Optional<admin> afficherAdminById(Long id) {
        return adminRepository.findById(id);
    }
}
