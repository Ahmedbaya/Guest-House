import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Admin } from '../Model/Admin.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  totaladmin:number=0
  totalclient:number=0
  totaloffre:number=0
  constructor(private router:Router,private service:CrudService){}
  ngOnInit():void{
    this.service.getadmin().subscribe(admin=>
    {this.totaladmin=admin.length})
    this.service.getclient().subscribe(client=>
      {this.totalclient=client.length})
      this.service.getoffre().subscribe(offre=>
        {this.totaloffre=offre.length})
  }
  

}
