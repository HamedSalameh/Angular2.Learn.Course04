import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from './shared/event.service';

@Component({
    selector: 'app-create-event',
    templateUrl: 'create-event.component.html',
    styles: [`
    em { float:right; color:#E05C65; padding-left: 10px;}
    .error input { background-color: #E3C3C5; }
  `]
})

export class CreateEventComponent implements OnInit {
    isDirty = true;
    constructor(private eventService: EventsService, private router: Router) { }

    ngOnInit() { }

    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues): void {
        this.eventService.saveEvent(formValues).subscribe( (res) => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }
}
