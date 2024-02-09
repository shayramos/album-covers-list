import { HomeComponent } from './home.component';
import { TheaudiodbService } from '../../core/services/theaudiodb.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let theaudiodbService: jasmine.SpyObj<TheaudiodbService>;

  beforeEach(async () => {
    theaudiodbService = jasmine.createSpyObj('TheaudiodbService', ['getAlbum']);

    component = new HomeComponent(theaudiodbService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
