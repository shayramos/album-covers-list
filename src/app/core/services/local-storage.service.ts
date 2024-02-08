import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  isLoggedIn$ = new Subject<boolean>();

  constructor(private router: Router) { }

  logout(): void {
    this.isLoggedIn$.next(false);
    this.removeUserCredentials();
    this.router.navigate(['/login']);
  }

  setUserCredentials(item: string): void {
    localStorage.setItem('user-credentials', item);
  }
  
  getUserCredentials(): any {
    return localStorage.getItem('user-credentials');
  }

  removeUserCredentials(): void {
    localStorage.removeItem('user-credentials');
  }
}
