import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Admin } from '../Model/Admin.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  updateForm: FormGroup;
  id: number;
  currentProduit = new Admin()
  userFile: any;
  public message!: string;
  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute
  ) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
      prenom: new FormControl('',[
        Validators.required,]),
      email: new FormControl('',[
          Validators.required,]),
      mdp: new FormControl('',[
        Validators.required,]),
      role: new FormControl('',[
          Validators.required,]),}
     this.updateForm = this.fb.group(formControls)
   }
   
   get nom() {return this.updateForm.get('nom');} 
  get prenom() { return this.updateForm.get('prenom');}
  get email() {return this.updateForm.get('email');}
  get mdp() {return this.updateForm.get('mdp');}
  get role() { return this.updateForm.get('role');}



  ngOnInit(): void {
    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;

    this.service.findAdminById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateForm.patchValue({
        nom: event.nom,
        prenom: event.prenom,
        email: event.email,
        mdp: event.mdp,
        role: event.role,
        
      });
    });
  }

  updateAdmin() {
    let data = this.updateForm.value;

    let admin = new Admin(
      this.id,
      data.nom,
      data.prenom,
      data.email,
      data.mdp,
      data.role
      
    );
    console.log(admin);
    console.log(data);
    this.service.updateAdmin(this.id,admin).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/ListAdmin'])
      
    });
  }


}
