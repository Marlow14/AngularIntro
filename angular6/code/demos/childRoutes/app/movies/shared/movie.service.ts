import { MOVIES } from './mock-movies';
import { Movie } from './movie.model';
import { Observable, of } from 'rxjs';
export class MovieService {
  list(): Observable<Movie[]> {
    return of(MOVIES);
  }

  find(id: number): Observable<Movie> {
    let movie = MOVIES.find(m => m.id == id);
    return of(movie);
  }
}
