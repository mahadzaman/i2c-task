import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    $('body').on('click', (e) => {
      if (
        !$(e.target).closest('.menu-btn').length &&
        !$(e.target).closest('.menu-open').length
      ) {
        this.menuOpen = false;
        this.body.style.overflow = '';
      }
    });
  }
  menuOpen: boolean = false;
  body: any = document.querySelector('body');

  openMenu() {
    this.menuOpen = true;
    this.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.menuOpen = false;
    this.body.style.overflow = '';
  }
}
