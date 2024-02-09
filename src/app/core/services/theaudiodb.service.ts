import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheaudiodbService {

  private beseUrl = 'https://www.theaudiodb.com/api/v1/json/2/searchalbum.php';
  
  constructor(private httpService: HttpClient) { }

  // Return all Album details from artist name
  getAlbumList(): Observable<Album[]> {
    const artistName = 'daft_punk';
    return this.httpService.get<any>(`${this.beseUrl}?s=${artistName}`)
      .pipe( map((response) => response.album as Album[]) )
  }

  // Return single album details from artist + album name
  getAlbum(idAlbum: string): Observable<Album> {
    const artistName = 'daft_punk';
    return this.httpService.get<any>(`${this.beseUrl}?s=${artistName}`)
      .pipe(
        map((response) => (response.album as Album[]).find((resp) => resp.idAlbum === idAlbum) as Album )
      )
  }
}

export interface Album {
  idAlbum: string
  strAlbum: string
  strArtist: string
  strStyle: string
  strAlbumThumb: string
  strDescriptionEN: string
  intYearReleased: string
  strGenre: string
  strReview: string
  strMood: string
}