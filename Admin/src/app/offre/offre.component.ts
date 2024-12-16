import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Offre } from '../Model/Offre.model';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent {
  updateForm: FormGroup;
  id: number;
  currentProduit = new Offre()
  userFile: any;
  public imagePath: any;
  imgURL: any = '';
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
      image: new FormControl('',[
        Validators.required,]),
      prix: new FormControl('',[
          Validators.required,]),
      date_deb: new FormControl('',[
        Validators.required,]),
      date_fin: new FormControl('',[
          Validators.required,]),}
     this.updateForm = this.fb.group(formControls)
   }
   get nom() {return this.updateForm.get('nom');} 
  get image() { return this.updateForm.get('image');}
  get prix() {return this.updateForm.get('prix');}
  get date_deb() {return this.updateForm.get('date_deb');}
  get date_fin() { return this.updateForm.get('date_fin');}



  ngOnInit(): void {
    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;

    this.service.findOffreById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateForm.patchValue({
        nom: event.nom,
        image: event.image,
        prix: event.prix,
        date_deb: event.date_deb,
        date_fin: event.date_fin,
        
      });
    });
  }

  updateOffre() {
    let data = this.updateForm.value;

    let offre = new Offre(
      this.id,
      data.nom,
      this.imgURL,
      data.prix,
      data.date_deb,
      data.date_fin
      
    );
    console.log(offre);
    console.log(data);
    this.service.updateOffre(this.id,offre).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/listoffre'])
      
    });
  }



  //upload Image
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);

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
