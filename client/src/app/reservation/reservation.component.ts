import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  listReservation:any=[]
  constructor(private service:CrudService , private toaster : NgToastService , private router : Router) { }
  
  ngOnInit(): void {
    this.service.getAllReservationbyClientId().subscribe((data:any)=>{
      console.log(data)
      this.listReservation=data;
    })
  }

}
