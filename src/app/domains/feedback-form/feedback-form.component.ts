import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  isAfterLaunch = false;

  ngOnInit(): void {
    const launchTime = new Date('2025-08-10T08:00:00+02:00');
    const now = new Date();
    this.isAfterLaunch = now >= launchTime;
  }
}
