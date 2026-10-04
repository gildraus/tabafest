import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('heroVideo') heroVideoRef!: ElementRef<HTMLVideoElement>;
  donationAmountDisplay = '0';

  private readonly donationTarget = 331_950;
  private readonly donationDurationMs = 1400;
  private amountAnimationFrameId: number | null = null;

  ngAfterViewInit() {
    this.safePlay();
    this.startDonationCountUp();
  }

  ngOnDestroy() {
    if (this.amountAnimationFrameId !== null) {
      cancelAnimationFrame(this.amountAnimationFrameId);
      this.amountAnimationFrameId = null;
    }
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

  private startDonationCountUp() {
    if (this.amountAnimationFrameId !== null) {
      cancelAnimationFrame(this.amountAnimationFrameId);
    }

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / this.donationDurationMs, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(this.donationTarget * easedProgress);

      this.donationAmountDisplay = this.formatWithDots(currentValue);

      if (progress < 1) {
        this.amountAnimationFrameId = requestAnimationFrame(tick);
        return;
      }

      this.donationAmountDisplay = this.formatWithDots(this.donationTarget);
      this.amountAnimationFrameId = null;
    };

    this.amountAnimationFrameId = requestAnimationFrame(tick);
  }

  private formatWithDots(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }










































}