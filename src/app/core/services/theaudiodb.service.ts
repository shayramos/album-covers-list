import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheaudiodbService {

  private beseUrl = 'https://www.theaudiodb.com/api/v1/json/2/';
  
  constructor(private httpService: HttpClient) { }

  getAlbumList(): Observable<Album[]> {
    return this.httpService.get<any>(`${this.beseUrl}searchalbum.php?s=daft_punk`)
      .pipe( map((response) => response.album as Album[]) )
  }

  getAlbum(idAlbum: string): Observable<Album> {
    return this.httpService.get<any>(`${this.beseUrl}searchalbum.php?s=daft_punk`)
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