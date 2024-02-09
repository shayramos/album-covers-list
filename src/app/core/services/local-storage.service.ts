import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private isLoggedIn$ = new Subject<boolean>();
  isLoggedIn = this.isLoggedIn$.asObservable();

  constructor(private router: Router) { }

  login(userInfo: string) {
    if (!userInfo) {
      return;
    }
    this.setUserCredentials(userInfo);
    this.isLoggedIn$.next(true);
    this.router.navigate(['/home']);
  }

  logout(): void {
    this.removeUserCredentials();
    this.isLoggedIn$.next(false);
    this.router.navigate(['/login']);
  }

  setUserCredentials(item: string): void {
    localStorage.setItem('user-credentials', item);
  }
  
  getUserCredentials(): string {
    return localStorage.getItem('user-credentials') as string;
  }

  removeUserCredentials(): void {
    localStorage.removeItem('user-credentials');
  }
}
