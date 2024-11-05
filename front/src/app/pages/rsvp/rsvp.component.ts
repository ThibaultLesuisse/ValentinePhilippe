import { Component, inject } from '@angular/core';
import { FormComponent } from '../../components/form/form/form.component';
import { CommonModule } from '@angular/common';
import { Rsvp } from '../../models/rsvp';
import { RsvpService } from '../../services/rsvp.service';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [FormComponent, CommonModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.css'
})
export class RsvpComponent {
  private rsvpService: RsvpService = inject(RsvpService);
  isLoading: boolean = false;
  formWasSent: boolean = false;
  errors: string = ''
  
  handleFormSubmit(rsvp: Rsvp){

    this.isLoading = true;

    this.rsvpService
      .postRvsp(rsvp)
      .subscribe({
        next: (rsvp) => {
          this.isLoading = false
          this.formWasSent = true
        },
        complete: () => {           
          this.isLoading = false
          this.formWasSent = true
        },
        error: (err) => {
          this.isLoading = false
          this.formWasSent = true
          this.errors = 'Failed to sent form probably because you already sent it.'
        }
    });
  }
}
