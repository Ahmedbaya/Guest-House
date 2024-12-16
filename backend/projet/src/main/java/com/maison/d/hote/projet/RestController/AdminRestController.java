package com.maison.d.hote.projet.RestController;
import com.maison.d.hote.projet.Entity.admin;
import com.maison.d.hote.projet.Repository.AdminRepository;
import com.maison.d.hote.projet.Services.AdminServices;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value ="/admin")

public class AdminRestController {
    @Autowired
    AdminServices adminServices ;
    private AdminRepository adminRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Autowired

    public AdminRestController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;



    }
    @RequestMapping(method = RequestMethod.POST )

    public admin ajoutAdmin(@RequestBody admin admin){
        System.err.println(admin);
        admin.setMdp(this.bCryptPasswordEncoder.encode(admin.getMdp()));
        admin savedUser = adminRepository.save(admin);
        savedUser.setRole(admin.getRole());
        return adminServices.ajouterAdmin(admin);


    }
    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public admin modifieradmin(@PathVariable("id")Long id, @RequestBody admin admin){
        admin.setMdp(this.bCryptPasswordEncoder.encode(admin.getMdp()));
        admin savedUser = adminRepository.save(admin);

        admin newAdmin = adminServices.modiferAdmin(admin);
        return newAdmin;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public void suppAdmin(@PathVariable("id") long id){
        adminServices.supprimerAdmin(id);

    }
    @RequestMapping(method = RequestMethod.GET )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public List<admin> afficherAdmin(){
        return adminServices.afficherAdmin();

    }
    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<admin> getAdminById(@PathVariable("id") long id){

        Optional<admin> admin = adminServices.afficherAdminById(id);
        return admin;
    }
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginAdmin(@RequestBody admin admin) {
        System.out.println("in login-admin"+admin);
        HashMap<String, Object> response = new HashMap<>();

        admin userFromDB = adminRepository.findAdminByEmail(admin.getEmail());
        System.out.println("userFromDB+admin"+userFromDB);
        if (userFromDB == null) {
            response.put("message", "Admin not found !");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            boolean compare = this.bCryptPasswordEncoder.matches(admin.getMdp(), userFromDB.getMdp());
            System.out.println("compare"+compare);
            if (!compare) {
                response.put("message", "admin not found !");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }else
            {
                String token = Jwts.builder()
                        .claim("data", userFromDB)
                        .signWith(SignatureAlgorithm.HS256, "SECRET")
                        .compact();
                response.put("token", token);

                response.put("role",userFromDB.getRole());
                System.out.println("role"+token);
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }

        }
    }



}
