import { Component, OnInit } from '@angular/core';
import {Photo} from '../../../DTO/Photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photos: Photo[];
  constructor() { }

  ngOnInit() {
    this.photos = [
      {
        description: null,
        imgUrl: '/assets/images/photo1.jpg'
      },
      {
        description: null,
        imgUrl: '/assets/images/photo2.jpg'
      },
      {
        description: null,
        imgUrl: '/assets/images/photo3.jpg'
      }
    ];
  }

}
