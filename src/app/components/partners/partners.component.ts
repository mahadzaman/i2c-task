import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  slides = [
    {img: "assets/images/microsoft-logo.svg", width: 263},
    {img: "assets/images/twitter-logo.svg", width: 89},
    {img: "assets/images/coke-logo.svg", width: 301},
    {img: "assets/images/microsoft-logo.svg", width: 263},
    {img: "assets/images/twitter-logo.svg", width: 89},
    {img: "assets/images/coke-logo.svg", width: 301},
    {img: "assets/images/microsoft-logo.svg", width: 263},
    {img: "assets/images/twitter-logo.svg", width: 89},
    {img: "assets/images/coke-logo.svg", width: 301},
    {img: "assets/images/microsoft-logo.svg", width: 263},
    {img: "assets/images/twitter-logo.svg", width: 89},
    {img: "assets/images/coke-logo.svg", width: 301},
  ];

  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1, variableWidth: true, infinite: true,};
}
