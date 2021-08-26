import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = [
    "https://www.imdb.com/",
    "https://www.rottentomatoes.com/",
    "https://www.rollingstone.com/movies/",
    "https://www.rogerebert.com/"
  ];
  constructor() { }

  ngOnInit() {
  }

}
