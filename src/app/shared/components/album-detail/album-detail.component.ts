import { Component } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.scss'
})
export class AlbumDetailComponent {

// --Album details page
// Title section that occupies 100% width on top. 
// Album cover section on the left, details section on the right (with flexbox)
// Album cover section includes:
// Cover image
// Clicking on the album cover image opens a modal (using Angular CDK overlay) with a bigger version (like a zoom).
// Use a directive that is applied to image element that is responsible for listening to click and open modal when triggered.
// Details page section includes:
// Everything else on the API call.
// Back button that navigates back to the Album covers grid Page.
}
