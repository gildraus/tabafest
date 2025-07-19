import { Routes } from '@angular/router';
import { HomeComponent } from './domains/home/home.component';
import { FeedbackFormComponent } from './domains/feedback-form/feedback-form.component';
import { SignUpFormComponent } from './domains/sign-up-form/sign-up-form.component';
import { InvitationComponent } from './domains/invitation/invitation.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'feedback',
        component: FeedbackFormComponent,
    },
    {
        path: 'signup',
        component: SignUpFormComponent
    },
    {
        path: 'invitation',
        component: InvitationComponent
    },
    {
        path: 'pozivnica',
        component: InvitationComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
