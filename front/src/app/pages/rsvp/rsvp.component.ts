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

  handleIsLoading(isLoadingEvent: boolean){
    console.log('is loading' + isLoadingEvent)
    this.isLoading = isLoadingEvent
  }

  handleFormSubmit(rsvp: Rsvp){
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
          console.log(err)
          this.isLoading = false
          this.errors = err.message
        }
    });
  }
}
