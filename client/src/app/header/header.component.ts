import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn:boolean;
  constructor(private service:CrudService,private router:Router){}
  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['/']).then(()=>{
      window.location.reload();
    });
    
  }
  ngOnInit(): void {
    
    this.isLoggedIn=this.service.isLoggedIn();
  }
  
}