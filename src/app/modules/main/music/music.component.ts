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
        description: 'My first project',
        imgUrl: 'https://i1.sndcdn.com/artworks-000412883376-wrmhqa-t500x500.jpg',
        link: 'https://soundcloud.com/tony-gribsun/start-original-mix'
      },
      {
        description: 'Описание',
        imgUrl: '/assets/images/paper.jpg',
        link: 'ya.ru'
      },
      {
        description: 'Описание',
        imgUrl: '/assets/images/paper.jpg',
        link: 'ya.ru'
      }
    ];
  }

}
