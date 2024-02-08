import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'album-covers-list';
  isLoggedIn = false;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.localStorageService.isLoggedIn$.subscribe((resp) => {
      this.isLoggedIn = resp;
    })
  }
}
