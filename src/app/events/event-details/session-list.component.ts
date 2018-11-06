import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})

export class SessionListComponent implements OnInit, OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy;
    @Input() sortBy;
    visibleSessions: ISession[];

    constructor() { }

    ngOnInit() { }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ?
                this.visibleSessions.sort(sortByName) : this.visibleSessions.sort(sortByVotes);
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = [...this.sessions];
        } else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
        }
    }
}

function sortByName(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1; }
    else if (s1.name === s2.name) {
        return 0; }
    else return -1;
}

function sortByVotes(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
