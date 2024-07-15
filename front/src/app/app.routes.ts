import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { PracticalInfoComponent } from './pages/practical-info/practical-info.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Valentine & Philippe',
    },
    {
        path: 'practical-info',
        component: PracticalInfoComponent,
        title: 'Valentine & Philippe',
    },
    {
        path: 'accomodation',
        component: AccomodationComponent,
        title: 'Accomodation',
    },
    {
        path: 'rsvp',
        component: RsvpComponent,
        title: 'Valentine & Philippe',
    }
];
