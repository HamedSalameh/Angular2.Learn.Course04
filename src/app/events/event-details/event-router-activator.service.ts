import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { EventsService } from '../shared/event.service';


@Injectable({providedIn: 'root'})
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventsService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        const valid = !!this.eventService.getEvent(+route.params['id']);
        if (!valid) {
            this.router.navigate(['/404']);
        }
        return true;
    }
}
