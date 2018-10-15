import { Component, OnInit } from '@angular/core';
import {Music} from '../../../DTO/Music';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  musicSheet: Music[];
  constructor() { }

  ngOnInit() {
    this.musicSheet = [
      {
        description: null,
        imgUrl: '/assets/images/track1.jpg',
        link: 'https://soundcloud.com/tony-gribsun/start-original-mix'
      },
      {
        description: null,
        imgUrl: '/assets/images/track2.jpg',
        link: 'ya.ru'
      },
      {
        description: null,
        imgUrl: '/assets/images/track3.jpg',
        link: 'ya.ru'
      }
    ];
  }

}
