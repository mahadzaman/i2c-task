import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {
  slides = [
    { img: 'assets/images/twitter-logo.svg', width: 89 },
    { img: 'assets/images/coke-logo.svg', width: 301 },
    { img: 'assets/images/microsoft-logo.svg', width: 263 },
    { img: 'assets/images/twitter-logo.svg', width: 89 },
    { img: 'assets/images/coke-logo.svg', width: 301 },
    { img: 'assets/images/microsoft-logo.svg', width: 263 },
    { img: 'assets/images/twitter-logo.svg', width: 89 },
    { img: 'assets/images/coke-logo.svg', width: 301 },
    { img: 'assets/images/microsoft-logo.svg', width: 263 },
    { img: 'assets/images/twitter-logo.svg', width: 89 },
    { img: 'assets/images/coke-logo.svg', width: 301 },
    { img: 'assets/images/microsoft-logo.svg', width: 263 },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    // autoplay: true,
    mobileFirst: true,
    infinite: true,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false
        },
      },
    ],
  };

  breakpoint(e: any) {
    console.log(e);
  }
}
