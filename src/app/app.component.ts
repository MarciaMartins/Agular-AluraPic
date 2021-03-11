import { PhotosService } from './photos/photos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alura Angular Parte 01';

  photos = [];

  constructor(photoService: PhotosService){
    photoService.listFromUser('flavio')
      .subscribe(photos => {
          console.log(photos);
          this.photos = photos
        });
  }

}
