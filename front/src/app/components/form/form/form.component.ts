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
      isVegetarian: new FormControl(false),
      dietaryComment: new FormControl(''),
      partnerFirstName: new FormControl(''),
      partnerLastName: new FormControl(''),
      partnerIsVegetarian: new FormControl(false),
      partnerDietaryComments: new FormControl('')
    });

    async Submit(){
      console.log(this.rsvpService);
      let rsvp: Rsvp = {
        email: this.rsvpForm.value.email ?? '',
        guests: [
          {
            firstName: this.rsvpForm.value.firstName ?? '',
            lastName: this.rsvpForm.value.lastName ?? '',
            isVegetarian: this.rsvpForm.value.isVegetarian ?? false,
            dietaryComment: this.rsvpForm.value.dietaryComment ?? ''
          }
        ]
      }

      if(this.bringsPlusOne){
        rsvp.guests.push(
          {
            firstName: this.rsvpForm.value.partnerFirstName ?? '',
            lastName: this.rsvpForm.value.partnerLastName ?? '',
            isVegetarian: this.rsvpForm.value.partnerIsVegetarian ?? false,
            dietaryComment: this.rsvpForm.value.partnerDietaryComments ?? ''
          }
        )
      }

      await this.rsvpService.postRvsp(rsvp);

      this.formWasSent = true;
  }

  togglePlusOne(){
    this.bringsPlusOne = !this.bringsPlusOne;
  }
}
