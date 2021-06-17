import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  template: ` <p>{{ movie | json }}</p> `,
  styles: [],
})
export class MoviesComponent implements OnInit {
  searchTerm: any = 'iron man';
  movie = {};
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.searchTerm = params.get('id');
    });
    this.movieService
      .getMovies(this.searchTerm)
      .subscribe((movie) => (this.movie = movie));
  }
}
