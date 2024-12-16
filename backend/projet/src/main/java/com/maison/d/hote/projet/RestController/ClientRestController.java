package com.maison.d.hote.projet.RestController;
import ch.qos.logback.core.net.server.Client;
import com.maison.d.hote.projet.Entity.admin;
import com.maison.d.hote.projet.Entity.client;
import com.maison.d.hote.projet.Repository.AdminRepository;
import com.maison.d.hote.projet.Repository.ClientRepository;
import com.maison.d.hote.projet.Services.ClientServices;
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
@RequestMapping(value ="/client")
public class ClientRestController {
    @Autowired
    ClientServices clientServices ;
    private ClientRepository clientRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Autowired

    public ClientRestController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;



    }
    @RequestMapping(method = RequestMethod.POST )

    public client ajoutClient(@RequestBody client client){
        client.setMdp(this.bCryptPasswordEncoder.encode(client.getMdp()));
        client savedUser = clientRepository.save(client);
        return clientServices.ajouterClient(client);


    }
    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public client modifierclient(@PathVariable("id")Long id, @RequestBody client client){
        client.setMdp(this.bCryptPasswordEncoder.encode(client.getMdp()));
        client savedUser = clientRepository.save(client);
        client newClient = clientServices.modiferClient(client);
        return newClient;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public void suppClient(@PathVariable("id") Long id){
        clientServices.supprimerClient(id);

    }
    @RequestMapping(method = RequestMethod.GET )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public List<client> afficherClient(){
        return clientServices.afficherClient();

    }
    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<client> getClientById(@PathVariable("id") Long id){

        Optional<client> client = clientServices.afficherClientById(id);
        return client;
    }
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginClient(@RequestBody client client) {
        System.out.println("in login-client"+client);
        HashMap<String, Object> response = new HashMap<>();

        client userFromDB = clientRepository.findClientByEmail(client.getEmail());
        System.out.println("userFromDB+client"+userFromDB);
        if (userFromDB == null) {
            response.put("message", "client not found !");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {

                String token = Jwts.builder()
                        .claim("data", userFromDB)
                        .signWith(SignatureAlgorithm.HS256, "SECRET")
                        .compact();
                response.put("token", token);
                System.out.println("hhh");
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }

        }




    @PostMapping(path = "register")
    public ResponseEntity<client> addClient(@RequestBody client client) {
        client.setMdp(this.bCryptPasswordEncoder.encode(client.getMdp()));
        client savedUser = clientRepository.save(client);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
}
