import { Component, OnInit, Inject } from '@angular/core';
import { MainComponent } from "./shell/ui-components/main/main.component";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rappa-front';

  private readonly defaultTitle = 'Tabafest 5.0 | Humanitarna egzibicija u Tabanovcu';
  private readonly defaultDescription = 'Tabafest je humanitarna letnja egzibicija u Tabanovcu. Pratite donacije, informacije o događaju i najavu za Tabafest 5.0.';
  private readonly defaultKeywords = 'tabafest, humanitarni događaj, tabanovac, letnja žurka';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.updateSeoMeta();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const contentContainer = this.document.querySelector('.content-container');
        if (contentContainer) {
          contentContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }

        this.updateSeoMeta();
      }
    });
  }

  private updateSeoMeta() {
    const activeRoute = this.getActiveRoute(this.route);
    const routeData = activeRoute.snapshot.data;

    const pageTitle = routeData['title'] || this.defaultTitle;
    const pageDescription = routeData['description'] || this.defaultDescription;
    const pageKeywords = routeData['keywords'] || this.defaultKeywords;
    const pageUrl = this.document.location.href;

    this.titleService.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ name: 'keywords', content: pageKeywords });

    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDescription });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: pageDescription });
  }

  private getActiveRoute(route: ActivatedRoute): ActivatedRoute {
    let currentRoute = route;

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    return currentRoute;
  }
}