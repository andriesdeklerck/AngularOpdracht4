import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgForage } from 'ngforage';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../bootstrap.css']
})
export class ListComponent implements OnInit {

  // @Output() onClicked = new EventEmitter();

  movies: any = [];
  error = null;
  card: boolean = false;
  constructor(private movieService: MovieService, private readonly ngf: NgForage) {

  }

  public getItem<T = any>(key: string): Promise<T> {
    return this.ngf.getItem<T>(key);
  }


  public async ngOnInit(): Promise<void> {
    this.loadMovies();
    let view = await this.ngf.getItem<boolean>('card');
    this.card = view;
  }

  // onClick(value: any) {
  //   this.onClicked.emit(value);
  // }

  loadMovies() {
    this.movieService.getTopRated().subscribe(
      data => this.movies = data.results,
      error => this.error = error
    );
    // console.log(this.movieService.getTopRated());
  }
}
