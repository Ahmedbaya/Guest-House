import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userDetails:any;
  constructor(private service:CrudService,private router:Router) {
    this.userDetails = this.service.userDetails();
   }
  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['/login']);
    
  }
  ngOnInit(): void {
    console.log(this.userDetails);
  }

}