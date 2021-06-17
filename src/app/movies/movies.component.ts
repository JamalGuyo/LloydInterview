import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  searchTerm: any = 'iron man';
  movies = [
    {
      Title: 'Iron Man',
      Year: '2008',
      imdbID: 'tt0371746',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
    },
    {
      Title: 'Iron Man 3',
      Year: '2013',
      imdbID: 'tt1300854',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg',
    },
  ];
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
      .subscribe((movie) => (this.movies = movie['Search']));
    console.log(this.movies);
  }
}
