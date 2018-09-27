import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from '../movies.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private moviesService: MoviesService) { 
    
  }

  movie: Movie;

  ngOnInit() {
  	
  }



}
