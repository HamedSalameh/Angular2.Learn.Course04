import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from 'src/app/common/toastr.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

declare let toastr;

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];
  constructor(private evnetService: EventsService, private toasterService: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events =  this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toasterService.success(eventName);
  }
}
