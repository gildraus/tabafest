import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { UnderConstructionComponent } from "../under-construction/under-construction.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, UnderConstructionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}