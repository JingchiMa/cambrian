import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

  private movies: Movie[];
  constructor() {
    this.fetchMovies();
  }

  fetchMovies(): void {
  	let movie1 = {
  		movieid : 1,
  		created : new Date();
  		modified : new Date();
  		title : 'movie1';
  		url : "https://as.ftcdn.net/r/v1/pics/ea2e0032c156b2d3b52fa9a05fe30dedcb0c47e3/landing/images_photos.jpg";
  	}

  	let movie2 = {
  		movieid : 2,
  		created : new Date();
  		modified : new Date();
  		title : 'movie2';  	
  		url : "http://indeksonline.net/wp-content/uploads/2018/08/photo-1500644813727-ac2ce0ae31f8.jpg";
  	}
  	this.movies = [movie1, movie2];
  }

  getMovies(): Movie[] {
    return this.movies;
  }
}

export class Movie {
  movieid: number;
  created: Date;
  modified: Date;
  title: string;
  url: string;
}
