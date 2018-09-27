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
        description: 'Описание',
        imgUrl: 'http://themocracy.com/wp-content/uploads/2016/12/Parties.jpg'
      },
      {
        description: 'Описание',
        imgUrl: 'http://themocracy.com/wp-content/uploads/2016/12/Parties.jpg'
      },
      {
        description: 'Описание',
        imgUrl: 'http://themocracy.com/wp-content/uploads/2016/12/Parties.jpg'
      }
    ];
  }

}
