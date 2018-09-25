import { NgModule } from '@angular/core';
import { MovieService } from './shared/movie.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [CommonModule, RouterModule],
  exports: [MovieListComponent, MovieDetailComponent],
  providers: [MovieService],
})
export default class MoviesModule {}
