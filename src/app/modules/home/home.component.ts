import { Component, OnInit } from '@angular/core';
import { Album, TheaudiodbService } from '../../core/services/theaudiodb.service';
import { AlbumCoverComponent } from "../../shared/components/album-cover/album-cover.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [AlbumCoverComponent]
})
export class HomeComponent implements OnInit {
// Everything else on the API call.
// Back button that navigates back to the Album covers grid Page.

  albumList = [] as Album[];
  
  constructor(private theaudiodbService: TheaudiodbService) {} 

  ngOnInit(): void {
    // TODO: Unsubscribe
    this.theaudiodbService.getAlbumList().subscribe((resp: Album[]) => {
      this.albumList = resp;
    })
  }

  goToDetail(_t3: Album) {
  }
}
