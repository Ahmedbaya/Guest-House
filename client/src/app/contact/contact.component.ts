import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../crud.service';
import { Contact } from '../model/Contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ContactForm:FormGroup
constructor(private service :CrudService,private router:Router,private fb:FormBuilder,private toast:NgToastService) {
  let formControls = {
    nom: new FormControl('',[
      Validators.required,]),
    email: new FormControl('',[
        Validators.required,
      Validators.email]),
    tel: new FormControl('',[
        Validators.required,]),
    sujet: new FormControl('',[
        Validators.required,]),
    msg: new FormControl('',[
      Validators.required,]),}
   this.ContactForm = this.fb.group(formControls)
 }
 get nom() {return this.ContactForm.get('nom');}
 get email() {return this.ContactForm.get('email');}
 get tel() { return this.ContactForm.get('tel');}
 get sujet() { return this.ContactForm.get('sujet');}
 get msg() {return this.ContactForm.get('msg');}


 addNewContact() {
  let data = this.ContactForm.value;
  console.log(data);
  let contact = new Contact(
   undefined,data.nom,data.email,data.tel,data.sujet,data.msg);
  console.log(contact);
  
  if (
    data.nom == 0 ||
    data.email == 0||
    data.tel == 0 ||
    data.sujet == 0 ||
    data.msg==0
  ) {
    this.toast.info({
      detail: 'Error Message',
      summary: 'Remplir votre champs',
    });
  } else {
  this.service.addcontact(contact).subscribe(
    res=>{
      console.log(res);
      this.toast.success({
        detail: 'Succes Message',
        summary: 'Message est Envoyée',
      });
      
      //this.router.navigate(['/listcontact']);
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


}

