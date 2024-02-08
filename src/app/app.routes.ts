import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AlbumDetailComponent } from './modules/album-detail/album-detail.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'album-detail/:id',
        component: AlbumDetailComponent
        // TODO: loadChildren:
    },
];
