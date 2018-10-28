import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {  Routes } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-router-activator.service';
import { EventsListResolver } from './events/events-list/events-list.resolver.service';

export const appRoutes: Routes = [
    {
        path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver}
    },
    {
        path: 'events/new', component: CreateEventComponent, canDeactivate: [ 'canDecactivateCreateComponent' ]
    },
    {
        path: 'events/:id', component: EventDetailsComponent, canActivate: [ EventRouteActivator ]
    },
    {
        path: '404', component: Error404Component
    },
    {
        path: '', redirectTo: '/events', pathMatch: 'full'
    },
    {
        path: 'user', loadChildren: './user/user.module#UserModule'
    }
];