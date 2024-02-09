import { AlbumDetailComponent } from './album-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TheaudiodbService } from '../../core/services/theaudiodb.service';
import { of } from 'rxjs';

describe('AlbumDetailComponent', () => {
  let component: AlbumDetailComponent;
  let theaudiodbService: jasmine.SpyObj<TheaudiodbService>;
  let router: jasmine.SpyObj<Router>;
  let activatedRoute: jasmine.SpyObj<ActivatedRoute>;
  
  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    theaudiodbService = jasmine.createSpyObj('TheaudiodbService', ['getAlbum']);
    activatedRoute = jasmine.createSpyObj('ActivatedRoute', [], { params: of({ id: '123' }) });

    component = new AlbumDetailComponent(activatedRoute, theaudiodbService, router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
