import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from '../movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.moviesService.fetchMovies();
    this.getMovies();
    console.log(this.movies);
  }

  getMovies():void {
  	this.movies = this.moviesService.getMovies();
  }

}
