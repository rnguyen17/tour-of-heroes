import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return new Observable(observer => {
      setTimeout(() => {
        this.messageService.add('My Data Has been loaded');
        observer.next(HEROES);
      }, 1000);
    });
  }
}
