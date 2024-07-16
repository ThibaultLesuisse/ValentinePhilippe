import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
    rsvpService: RsvpService = Inject(RsvpService);
    bringsPlusOne: boolean = false;
    formWasSent: boolean = false;

    rsvpForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      dietaryComment: new FormControl(''),
      partnerFirstName: new FormControl(''),
      partnerLastName: new FormControl(''),
      partnerDietaryComments: new FormControl(''),
      street: new FormControl(''),
      streetNumber: new FormControl(''),
      postalCode: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl('')
    });

    async Submit(){
      console.log(this.rsvpService);
      let rsvp: Rsvp = {
        email: this.rsvpForm.value.email ?? '',
        guests: [
          {
            firstName: this.rsvpForm.value.firstName ?? '',
            lastName: this.rsvpForm.value.lastName ?? '',
            dietaryComment: this.rsvpForm.value.dietaryComment ?? ''
          }
        ],
        address: {
          street: this.rsvpForm.value.street ?? '',
          streetNumber: this.rsvpForm.value.streetNumber ?? '',
          city: this.rsvpForm.value.city ?? '',
          postalCode: this.rsvpForm.value.postalCode ?? '',
          country: this.rsvpForm.value.country ?? ''
        }
      }

      await this.rsvpService.postRvsp(rsvp);

      this.formWasSent = true;
  }

  togglePlusOne(){
    this.bringsPlusOne = !this.bringsPlusOne;
  }
}
