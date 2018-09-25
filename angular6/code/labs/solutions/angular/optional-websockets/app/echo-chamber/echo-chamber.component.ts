import { Component, OnInit } from '@angular/core';
import { EchoChamberService } from './shared/echo-chamber.service';

@Component({
  selector: 'echo-chamber',
  templateUrl: './echo-chamber.component.html',
})
export class EchoChamberComponent implements OnInit {
  echoes: Array<any> = [];

  constructor(private echoService: EchoChamberService) {}

  ngOnInit() {
    this.echoService.echoes.subscribe(echo => {
      this.echoes.push(echo);
    });
  }

  send(message: string) {
    this.echoService.echoes.next(message);
  }
}
