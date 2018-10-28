import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { pipe, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IEvent } from '../shared';

@Component({
    templateUrl: 'event-details.component.html',
    styleUrls: ['event-details.component.scss']
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;

    constructor(private eventService: EventsService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        const _id = +this.activatedRoute.snapshot.params['id'];
        // this.activatedRoute.params.subscribe(
        //     switchMap((data: Params) => {
        //         return ...
        //     }));

        this.event = this.eventService.getEvent(_id);
    }
}
