import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() onClicked = new EventEmitter();

  movies: any = [];
  error = null;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.loadMovies();
  }

  onClick(value: any) {
    this.onClicked.emit(value);
  }

  loadMovies() {
    this.movieService.getTopRated().subscribe(
      data => this.movies = data.results,
      error => this.error = error
      );
    // console.log(this.movieService.getTopRated());
  }
}
