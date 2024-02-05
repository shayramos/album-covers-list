import { Component, OnInit } from '@angular/core';
import { Album, TheaudiodbService } from '../../core/services/theaudiodb.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  albumList = [] as Album[];
  
  constructor(private theaudiodbService: TheaudiodbService) {} 

  ngOnInit(): void {
    // TODO: Unsubscribe
    this.theaudiodbService.getAlbumList().subscribe((resp: Album[]) => {
      this.albumList = resp;
    })
  }
}
