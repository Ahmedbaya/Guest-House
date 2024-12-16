import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Offre } from '../model/Offre.model';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  messageCommande=""
  listOffre : Offre[];
  isLoggedIn:boolean;
  p:number=1;
  collection:any[];
  constructor(private service:CrudService,private router:Router) { }
 //supprimer
  ngOnInit(): void {
    this.service.getOffre().subscribe(offre => {
      this.listOffre = offre
      this.isLoggedIn=this.service.isLoggedIn();
    })
  }
  
  //reservation 
  reserver(event:any)
  {
    this.messageCommande=`<div class="alert alert-primary" role="alert">
    Veuillez patienter ...
  </div>`
    console.log(event)
    let rq:any={}

    rq.id_client=Number(localStorage.getItem("idC")) 
    rq.id_offre=event.id
  
   
   
  
   
    console.log(rq)
  
    this.service.reserverFromApi(rq).subscribe((data:any)=>{
      this.router.navigate(['reservation']).then(()=>{window.location.reload()})
    
      this.messageCommande=`<div class="alert alert-success" role="alert">
    Réservé avec succès
  </div>`
    }, err=>{
      this.messageCommande=`<div class="alert alert-warning" role="alert">
     Erreur, Veuillez réssayer !! 
    </div>`

    })
    setTimeout(() => {
      this.messageCommande=""
    }, 3000);
  }

    connexion()
    {
      this.router.navigate(['/Login'])
    }
}