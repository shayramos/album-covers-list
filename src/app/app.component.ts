import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { CommonModule } from '@angular/common';
import { TheaudiodbService } from './core/services/theaudiodb.service';
import { LocalStorageService } from './core/services/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ TheaudiodbService ],
  imports: [
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
    HeaderComponent
  ]
})
export class AppComponent implements OnInit {
  title = 'album-covers-list';
  isLoggedIn = false;
  userName = 'Usuário sem nome';

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.setSavedCredentials();
    this.localStorageService.isLoggedIn.subscribe((resp) => {
      this.isLoggedIn = resp;
      const userCredentials = this.localStorageService.getUserCredentials();
      this.userName = userCredentials ? JSON.parse(userCredentials).userName : '';
    })
  }

  setSavedCredentials(): void {
    const userCredentials = this.localStorageService.getUserCredentials();
    if (userCredentials) {
      this.isLoggedIn = true;
      this.userName = JSON.parse(userCredentials).userName;
    }
  }
}
