import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos = [];

  constructor(private photoService: PhotoService){ }

  ngOnInit(): void{
    this.photoService.listFromUser('flavio')
      .subscribe(photos => {
          console.log(photos[0].description);
          this.photos = photos
        });
  }

  

}
