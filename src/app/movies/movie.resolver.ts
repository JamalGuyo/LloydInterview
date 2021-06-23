import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieService } from '../movie.service';

@Injectable({
  providedIn: 'root',
})
export class MovieResolver implements Resolve<boolean> {
  constructor(private movieService: MovieService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const searchTerm: string = route.paramMap.get('id') || '';

    return this.movieService.getMovies(searchTerm);
  }
}
