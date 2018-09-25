import { Injectable } from '@angular/core';
import { WebSocketService } from '../../shared/websocket.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const ECHO_URL = 'ws://echo.websocket.org/';
//const ECHO_URL = 'ws://localhost:3005';

@Injectable()
export class EchoChamberService {
  echoes: Subject<any>;

  constructor(private wsService: WebSocketService) {
    this.echoes = <Subject<any>>wsService.connect(ECHO_URL).pipe(
      map(response => {
        return JSON.parse(response.data);
      })
    );
  }
}
