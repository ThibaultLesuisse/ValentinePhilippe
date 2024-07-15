import { Component } from '@angular/core';
import { Accomodation } from '../../models/accomodation';
import { GetAccomodations } from '../../data/accomodations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accomodation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accomodation.component.html',
  styleUrl: './accomodation.component.css'
})

export class AccomodationComponent {

  accomodationList: Accomodation[]

  constructor(){
    this.accomodationList = GetAccomodations();
  }

  onHotelClick(accomodation: Accomodation) {
    window.open(accomodation.url, "_blank");
  }
}
