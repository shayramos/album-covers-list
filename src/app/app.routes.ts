import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AlbumDetailComponent } from './modules/album-detail/album-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
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
