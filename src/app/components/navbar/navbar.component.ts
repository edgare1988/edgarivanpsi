import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
mobileMenuOpen = false;
  lastScrollTop = 0;
  isNavbarVisible = true;
  isScrolled = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;

    this.isScrolled = currentScroll > 10;

    if (currentScroll <= 0) {
      this.isNavbarVisible = true;
      this.lastScrollTop = 0;
      return;
    }

    if (currentScroll > this.lastScrollTop && currentScroll > 120) {
      // Bajando
      this.isNavbarVisible = false;
      this.closeMobileMenu();
    } else {
      // Subiendo
      this.isNavbarVisible = true;
    }

    this.lastScrollTop = currentScroll;
  }

}
