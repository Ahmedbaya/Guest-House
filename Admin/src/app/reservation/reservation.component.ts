import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Reservation } from '../Model/Reservation.model';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
    listreservation : Reservation[]
    constructor(private service:CrudService,private router:Router) { }
    ngOnInit(): void {
      this.service.getreservation().subscribe(Reservation => {
        this.listreservation = Reservation
      })
    }
  
  }