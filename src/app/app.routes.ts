import { Routes } from '@angular/router';
import { HomeComponent } from './domains/home/home.component';
import { FeedbackFormComponent } from './domains/feedback-form/feedback-form.component';
import { SignUpFormComponent } from './domains/sign-up-form/sign-up-form.component';
import { InvitationComponent } from './domains/invitation/invitation.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        data: {
            title: 'Tabanovac | Tabafest 5.0 humanitarna egzibicija',
            description: 'Tabafest je humanitarna letnja egzibicija u Tabanovcu. Saznajte sve o događaju u Tabanovcu, donacijama i najavi Tabafest 5.0.',
            keywords: 'tabafest, humanitarni događaj, tabanovac, letnja žurka, srbi za srbe, carlsberg, vrtenje na laktovi'
        }
    },
    {
        path: 'feedback',
        component: FeedbackFormComponent,
        data: {
            title: 'Tabafest | Feedback',
            description: 'Pošaljite utiske i predloge za Tabafest događaj.',
            keywords: 'tabafest feedback, utisci, predlozi'
        }
    },
    {
        path: 'signup',
        component: SignUpFormComponent,
        data: {
            title: 'Tabafest | Prijava',
            description: 'Forma za prijavu na Tabafest događaj.',
            keywords: 'tabafest prijava, tabafest signup'
        }
    },
    {
        path: 'invitation',
        component: InvitationComponent,
        data: {
            title: 'Tabafest | Pozivnica',
            description: 'Zvanična Tabafest pozivnica i informacije o događaju.',
            keywords: 'tabafest pozivnica, invitation'
        }
    },
    {
        path: 'pozivnica',
        component: InvitationComponent,
        data: {
            title: 'Tabafest | Pozivnica',
            description: 'Zvanična Tabafest pozivnica i informacije o događaju.',
            keywords: 'tabafest pozivnica, invitation'
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];
