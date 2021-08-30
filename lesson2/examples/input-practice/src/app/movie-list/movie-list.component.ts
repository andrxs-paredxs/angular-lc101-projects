import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian', 'Hidden Figures'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newMovie : string){
      if (newMovie === ''){
         return;
      } 

      if( this.movies.includes(newMovie) ){
         return;
      }
      this.movies.push(newMovie);
   }
}