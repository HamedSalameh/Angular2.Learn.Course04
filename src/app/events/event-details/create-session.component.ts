import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restrictedWords } from '../shared';

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html'
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        });
    }

    saveSession(values) {
        const session: ISession = {
            id: undefined,
            name: values.name,
            presenter: values.presenter,
            duration: +values.duration,
            level: values.level,
            abstract: values.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    }
}
