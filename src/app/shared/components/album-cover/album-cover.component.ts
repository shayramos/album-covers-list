import { Component, Input } from '@angular/core';
import { Album } from '../../../core/services/theaudiodb.service';

@Component({
  selector: 'app-album-cover',
  standalone: true,
  imports: [],
  templateUrl: './album-cover.component.html',
  styleUrl: './album-cover.component.scss'
})
export class AlbumCoverComponent {

  @Input() album = {} as Album;
  
}
