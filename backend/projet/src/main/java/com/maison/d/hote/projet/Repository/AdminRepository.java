package com.maison.d.hote.projet.Repository;

import com.maison.d.hote.projet.Entity.admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<admin,Long> {
    admin findAdminByEmail(String email);


}