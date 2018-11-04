import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { pipe, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IEvent, ISession } from '../shared';

@Component({
    templateUrl: 'event-details.component.html',
    styleUrls: ['event-details.component.scss']
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;

    constructor(private eventService: EventsService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        const _id = +this.activatedRoute.snapshot.params['id'];
        this.event = this.eventService.getEvent(_id);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }
}
