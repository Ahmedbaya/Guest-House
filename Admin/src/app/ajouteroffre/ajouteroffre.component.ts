import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, RouterLinkActive } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';
import { Offre } from '../Model/Offre.model';

@Component({
  selector: 'app-ajouteroffre',
  templateUrl: './ajouteroffre.component.html',
  styleUrls: ['./ajouteroffre.component.css']
})
export class AjouteroffreComponent {
  OffreForm:FormGroup
  userFile:any
  message:any
  imagePath:any
  imgURL:any
constructor(private service :CrudService,private router:Router,private fb:FormBuilder,private toast:NgToastService) {
  let formControls = {
    nom: new FormControl('',[
      Validators.required,]),
    image: new FormControl('',[
      Validators.required,]),
    prix: new FormControl('',[
        Validators.required,]),
    date_deb: new FormControl('',[
      Validators.required,]),
    date_fin: new FormControl('',[
        Validators.required,]),}
   this.OffreForm = this.fb.group(formControls)
 }
 get nom() {return this.OffreForm.get('nom');} 
get image() { return this.OffreForm.get('image');}
get prix() {return this.OffreForm.get('prix');}
get date_deb() {return this.OffreForm.get('date_deb');}
get date_fin() { return this.OffreForm.get('date_fin');}

 addNewOffre() {
  let data = this.OffreForm.value;
  console.log(data);
  let offre = new Offre(
    undefined,data.nom,this.imgURL,data.prix,data.date_deb,data.date_fin);
  console.log(offre);
  
  if (
    data.nom == 0 ||
    data.prenom == 0||
    data.email == 0 ||
    data.mdp == 0 ||
    data.role==0
  ) {
    this.toast.info({
      detail: 'Error Message',
      summary: 'Remplir votre champs',
    });
  } else {
  this.service.addoffre(offre).subscribe(
    res=>{
      console.log(res);
      this.toast.success({
        detail: 'Succes Message',
        summary: 'Message est Envoyée',
      });
      
      this.router.navigate(['/listoffre']);
    },
    err=>{
      console.log(err);
      this.toast.error({
        detail: 'Error Message',
        summary: 'Probléme de Serveur',
      }); }
  )

  }
}


  ngOnInit(): void {
  }
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
  

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }

}
