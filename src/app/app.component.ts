import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./shell/ui-components/main/main.component";
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rappa-front';

  constructor(private router: Router) { }

  ngOnInit(): void {
    //bad solution but I will let it work for now
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const contentContainer = document.querySelector('.content-container');
        if (contentContainer) {
          contentContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }
}