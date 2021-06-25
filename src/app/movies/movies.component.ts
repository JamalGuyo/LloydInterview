import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  searchTerm: any = '';
  movies = [{
    Poster:'',
    Title:'',
    Type:'',
    Year:''
  }];
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const data = this.route.snapshot.data['movies'];
    this.movies = data['Search'];

    console.log(this.movies);
  }
}
