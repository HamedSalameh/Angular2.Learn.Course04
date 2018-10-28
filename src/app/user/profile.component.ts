import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right};
    .error input { background-color: red; }
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    const lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    // we need a form group to associate the form controls
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }

  }
}
