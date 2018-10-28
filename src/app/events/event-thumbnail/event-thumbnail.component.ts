import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared';


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;

  @Output() eventClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    console.log(this.event.name);
    this.eventClick.emit(this.event.name);
  }

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart};
  }

}
