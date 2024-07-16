import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
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
