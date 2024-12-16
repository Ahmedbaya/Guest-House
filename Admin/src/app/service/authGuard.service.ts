import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CrudService } from "./crud.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
  
    constructor(private service: CrudService, private router: Router) {
  
    }
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      let isLoggedIn = this.service.isLoggedIn();
  
      if (isLoggedIn) {
        return true;
      }else{
        this.router.navigate(['/login']);
  
        return false;
      }
      
    }
  
  }
  
  