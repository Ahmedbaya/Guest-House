import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css']
})
export class ListadminComponent {
  listadmin : Admin[]
  role:string
  constructor(private service:CrudService,private router:Router) { }
  //supprimer
  Deleteadmin(admin: Admin){
    if(confirm("Voulez vous supprimer cet admin avec l'ID " + admin.id + " ?")) {
     
      this.service.onDeleteadmin(admin.id).subscribe(() => {
        this.router.navigate(['/ListAdmin']).then(() => {
          window.location.reload()
        })
      })}}
  ngOnInit(): void {
    this.service.getadmin().subscribe(admin => {
      this.listadmin = admin
    })
    this.role = localStorage.getItem("role") as string;
    console.log("role",this.role);
  }

}
