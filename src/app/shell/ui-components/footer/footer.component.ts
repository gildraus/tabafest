
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
})
export class FooterComponent {
  email = 'kontakt@tabafest.rs'; // Zameniti sa vašim emailom
  
  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      // Možete dodati toast notifikaciju ovde
      console.log('Email kopiran!');
    });
  }
}
