import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  loginGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
  
  constructor (private localStorageService: LocalStorageService) {}

  login() {
    if (!this.loginGroup.valid) {
      return;
    }
    const userInfo = this.loginGroup.value;
    this.localStorageService.login(JSON.stringify(userInfo));
  }

}
