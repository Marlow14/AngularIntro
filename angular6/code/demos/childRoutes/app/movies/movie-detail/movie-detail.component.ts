import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie.model';
import { MovieService } from '../shared/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      let id = +p['id'];
      this.movieService.find(id).subscribe(m => (this.movie = m));
    });
  }
}
