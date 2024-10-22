import { Injectable } from '@angular/core';
import { Rsvp } from '../models/rsvp';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RsvpService {
  url: string = "https://api.valentine-philippe.be"

  constructor(private http: HttpClient) { }

  postRvsp(rsvp: Rsvp): Observable<Rsvp> {
    return this
      .http
      .post<Rsvp>(this.url + '/rsvp', rsvp,
        {
          headers: { "content-type": "application/json", "accepts": "application/json" },
        })
      .pipe(catchError((error: HttpErrorResponse): Observable<never> => {
        let errorMessage: string;
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } 
        else {
          // Server-side error
          if (error.error && error.error.message) {
            errorMessage = error.error.title; // Extract the message from your problem details
          } else {
            errorMessage = `${error.message}`;
          }
        }
        return throwError(() => new Error(errorMessage));
        
      }));
  }
}
