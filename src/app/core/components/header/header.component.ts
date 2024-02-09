import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isLoggedIn = false;
  @Input() userName = 'Nome do Usuário';

  constructor(private localStorageService: LocalStorageService) { }
  
  logout () {
    this.localStorageService.logout();
  }
}
