import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

// import { MOVIE_API_KEY } from './utils/keys';

const api_key = "7f66f581598c7088e81cee783f01348a";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopRated(): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
    // console.log(url);
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getById(id: string | null): Observable<any>{
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    return throwError(`Something went wrong: ${error.message}`);
  }
}
