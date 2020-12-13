import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../bootstrap.css']
})
export class DetailComponent implements OnInit {

  movie: any;
  error: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie() {
    const movieId = this.route.snapshot.paramMap.get('id');
    this.movieService.getById(movieId).subscribe(
      data => this.movie = data,
      error => this.error = error)
  }
}
