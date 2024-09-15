import { Injectable } from '@angular/core';
import { Rsvp } from '../models/rsvp';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RsvpService {
  url: string = "https://api.valentine-philippe.be"

  constructor(private http: HttpClient) { }

  postRvsp(rsvp: Rsvp) : Observable<Rsvp>{
      return this
        .http
        .post<Rsvp>(this.url + '/rsvp', rsvp, { headers:{"content-type": "application/json", "accepts": "application/json"}});
  }
}
