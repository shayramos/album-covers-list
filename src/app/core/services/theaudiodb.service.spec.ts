import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Album, TheaudiodbService } from './theaudiodb.service';

describe('TheaudiodbService', () => {
  let service: TheaudiodbService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TheaudiodbService]
    });

    service = TestBed.inject(TheaudiodbService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return album list', () => {
    const dummyAlbumList = [{ idAlbum: '1', strAlbum: 'Album 1' }, { idAlbum: '2', strAlbum: 'Album 2' }] as Album[];

    service.getAlbumList().subscribe((albums: Album[]) => {
      expect(albums.length).toBe(2);
      expect(albums).toEqual(dummyAlbumList);
    });

    const req = httpTestingController.expectOne('https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=daft_punk');
    expect(req.request.method).toBe('GET');
    req.flush({ album: dummyAlbumList });
  });

  it('should return single album details', () => {
    const dummyAlbumList = [{ idAlbum: '1', strAlbum: 'Album 1' }, { idAlbum: '2', strAlbum: 'Album 2' }] as Album[];
    const idAlbum = '2';

    service.getAlbum(idAlbum).subscribe(album => {
      expect(album).toEqual(dummyAlbumList[1]);
    });

    const req = httpTestingController.expectOne('https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=daft_punk');
    expect(req.request.method).toBe('GET');
    req.flush({ album: dummyAlbumList });
  });

});
