import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Movie Photos';//'Photo/Image Section Title Here';
  image1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/The_Manchurian_Candidate_%281962_poster%29.jpg/314px-The_Manchurian_Candidate_%281962_poster%29.jpg';
  image2 = 'https://upload.wikimedia.org/wikipedia/en/d/dd/OceansEightPoster.jpeg';
  image3 = 'https://upload.wikimedia.org/wikipedia/en/e/ec/The_Incredibles.jpg';
  image4 = 'https://upload.wikimedia.org/wikipedia/en/4/4f/The_official_poster_for_the_film_Hidden_Figures%2C_2016.jpg';

  image1Title = "The Manchurian Candidate";
  image2Title = "Oceans 8";
  image3Title = "The Incredibles";
  image4Title = "Hidden Figures";

  constructor() { }

  ngOnInit() {
  }

}