import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { UserModule } from './user/user.module';

import {
  CreateEventComponent,
  EventThumbnailComponent,
  EventsService,
  EventDetailsComponent,
  EventRouteActivator,
  EventsListComponent,
  EventsListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleComponent } from './common/collapsible-well.component';

@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component,
    EventsListComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventsAppComponent,
    EventThumbnailComponent,
    CreateSessionComponent,
    SessionListComponent,

    CollapsibleComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    {
      provide: 'canDecactivateCreateComponent', useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('Unsaved, do you want to cancel?');

  }
  return true;
}
