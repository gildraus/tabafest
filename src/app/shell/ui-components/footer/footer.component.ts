
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
})
export class FooterComponent {
  email = 'kontakt@tabafest.rs';
  
  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      console.log('Email kopiran!');
    });
  }
}
