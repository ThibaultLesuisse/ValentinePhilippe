import { Injectable } from '@angular/core';
import { Rsvp } from '../models/rsvp';

@Injectable({
  providedIn: 'root',
})
export class RsvpService {
  url: string = "http://localhost:5014"

  constructor() { }

  async postRvsp(rsvp: Rsvp) : Promise<Rsvp | undefined>{
    try {
      const data = await fetch(this.url + 'rsvp', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rsvp)
      });

      return await data.json() ?? []; 

    } catch (error) {
      // Handle error
      return undefined;
    }
  }
}
