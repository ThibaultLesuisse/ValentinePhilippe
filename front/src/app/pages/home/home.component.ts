import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { FormComponent } from '../../components/form/form/form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent, NgOptimizedImage, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
