import { Component, OnDestroy, OnInit } from '@angular/core';
import { Album, TheaudiodbService } from '../../core/services/theaudiodb.service';
import { AlbumCoverComponent } from "../../shared/components/album-cover/album-cover.component";
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [AlbumCoverComponent, RouterModule]
})
export class HomeComponent implements OnInit, OnDestroy {
  albumList = [] as Album[];  
  destroy$: Subject<void> = new Subject<void>();

  constructor(private theaudiodbService: TheaudiodbService) {} 

  ngOnInit(): void {
    this.theaudiodbService.getAlbumList().pipe(takeUntil(this.destroy$)).subscribe((resp: Album[]) => {
      this.albumList = resp;
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
