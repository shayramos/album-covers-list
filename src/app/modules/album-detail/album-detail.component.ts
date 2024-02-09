import { Component, OnDestroy, OnInit } from '@angular/core';
import { Album, TheaudiodbService } from '../../core/services/theaudiodb.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalTriggerDirective } from '../../shared/directives/modal-trigger.directive';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalTriggerDirective],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.scss'
})
export class AlbumDetailComponent implements OnInit, OnDestroy {

  album = {} as Album;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute,
    private theaudiodbService: TheaudiodbService,
    private router: Router) {} 

  ngOnInit(): void {
    const idAlbum = this.route.snapshot.paramMap.get('id') as string;
    if (idAlbum) {
      this.theaudiodbService.getAlbum(idAlbum)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((resp: Album) => {
        this.album = resp;
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
