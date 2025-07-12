import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public showDropdown = false;
  public showToggle = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      this.updateDropdownVisibility(window.innerWidth);
    }
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.updateDropdownVisibility(window.innerWidth);
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  closeDropdown() {
    if (typeof window !== 'undefined' && window.innerWidth < 600) {
      this.showDropdown = false;
    }
  }

  private updateDropdownVisibility(width: number) {
    if (width !== undefined) {
      this.showDropdown = width > 600;
      this.showToggle = width < 600;
    }
  }
}