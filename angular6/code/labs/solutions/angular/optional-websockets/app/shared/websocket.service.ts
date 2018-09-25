import { Subject, Observable, Observer } from 'rxjs';

export class WebSocketService {
  private subject: Subject<any>;

  public connect(url): Subject<any> {
    if (!this.subject) {
      this.subject = this.create(url);
    }
    return this.subject;
  }

  private create(url): Subject<any> {
    let ws = new WebSocket(url);

    //receiver
    let observable = Observable.create((observer: Observer<any>) => {
      ws.onmessage = observer.next.bind(observer);
      ws.onerror = observer.error.bind(observer);
      ws.onclose = observer.complete.bind(observer);
      return ws.close.bind(ws);
    });

    //sender
    let observer = {
      next: data => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      },
    };
    return Subject.create(observer, observable);
  }
}
