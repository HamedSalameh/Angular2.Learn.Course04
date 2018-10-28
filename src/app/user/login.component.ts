import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: [`
    em { float: right; }
    `]
})
export class LoginComponent {

    constructor(private authService: AuthService, private router: Router) {}

    userName;
    password;

    login(data) {
        this.authService.loginUser(data.userName, data.password);

        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }

}
