import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf='visible' select="[well-body]"></ng-content>
    </div>
    `
})

export class CollapsibleComponent implements OnInit {
    visible = true;
    constructor() { }

    ngOnInit() { }

    toggleContent() {
        this.visible = !this.visible;
    }
}
