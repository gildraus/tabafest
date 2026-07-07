import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('heroVideo') heroVideoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.safePlay();
  }

  onCanPlay() {
    this.safePlay();
  }

  private safePlay() {
    const video = this.heroVideoRef?.nativeElement;
    if (!video) {
      return;
    }

    video.defaultMuted = true;
    video.muted = true;
    video.volume = 0;
    video.playsInline = true;
    video.play().catch(() => {});
  }










































}