import { Injectable } from '@angular/core';
import { Rsvp } from '../models/rsvp';

@Injectable({
  providedIn: 'root'
})
export class RsvpService {

  constructor() { }

  postRvsp(rsvp: Rsvp) : Rsvp {
    return { firstName: "Thibault", lastName: "Lesuisse", email: "lesuisse.thibault"};
  }
}
