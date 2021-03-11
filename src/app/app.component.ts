import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alura Angular Parte 01';

  photos = [];

  constructor(http: HttpClient){
    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(photos => {
        console.log(photos);
        this.photos = photos
      });
  }

}
