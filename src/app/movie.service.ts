import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieApiUrl: string = 'http://www.omdbapi.com/';
  constructor(private http: HttpClient) {}

  getMovies(searchTerm: string): Observable<any> {
    return this.http.get<any>(
      `${this.movieApiUrl}?s=${searchTerm}&apikey=44217cd0`
    );
  }
}
