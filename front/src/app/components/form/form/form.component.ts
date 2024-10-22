import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RsvpService } from '../../../services/rsvp.service';
import { Rsvp } from '../../../models/rsvp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() FormSubmit = new EventEmitter<Rsvp>();

  rsvpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    dietaryRestrictions: new FormControl(''),
    partnerFirstName: new FormControl(''),
    partnerLastName: new FormControl(''),
    streetAndHouseNumber: new FormControl(''),
    postalCode: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl('')
  });

  Submit() {
    let rsvp: Rsvp = {
      email: this.rsvpForm.value.email ?? '',
      guests: [
        {
          firstName: this.rsvpForm.value.firstName ?? '',
          lastName: this.rsvpForm.value.lastName ?? '',
          dietaryRestrictions: this.rsvpForm.value.dietaryRestrictions ?? ''
        }
      ],
      address: {
        streetAndHouseNumber: this.rsvpForm.value.streetAndHouseNumber ?? '',
        city: this.rsvpForm.value.city ?? '',
        postalCode: this.rsvpForm.value.postalCode ?? '',
        country: this.rsvpForm.value.country ?? ''
      }
    }
    this.FormSubmit.emit(rsvp)
  } 
}
