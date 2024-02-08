import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor (private localStorageService: LocalStorageService, private router: Router) {}

  loginGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  login() {
    const userInfo = this.loginGroup.value;
    this.localStorageService.setUserCredentials(JSON.stringify(userInfo));
    this.router.navigate(['/home']);
    this.localStorageService.isLoggedIn$.next(true);
  }

}
