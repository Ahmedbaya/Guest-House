import { Client } from "./Client.model";
import { Offre } from "./Offre.model";


export class Reservation {
    constructor(
      public id?: number,
      public client?: Client,
      public offre?: Offre,
    ) {}
  }