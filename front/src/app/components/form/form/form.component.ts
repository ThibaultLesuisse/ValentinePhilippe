import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RsvpService } from '../../../services/rsvp.service';
import { Rsvp } from '../../../models/rsvp';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    rsvpService: RsvpService = Inject(RsvpService);

    rsvpForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });

    Submit(){
      console.log('hey')
      this.rsvpService.postRvsp(
        { 
          firstName: this.rsvpForm.value.firstName ?? '',
          lastName: this.rsvpForm.value.lastName ?? '',
          email: this.rsvpForm.value.email ?? '',
        } as Rsvp)
  }
}
