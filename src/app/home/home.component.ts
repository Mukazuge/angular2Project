import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppStateService} from '../common/app-state.service';
import {Subscription} from 'rxjs/Subscription';
import { mockSpeeches} from '../common/mock-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  speeches = mockSpeeches;

  constructor(public appState: AppStateService) {}

  ngOnInit() {
    this.subscription = this.appState.event.subscribe((res) => console.log('search is: ', res ? res : 'It\'s a Trap!'));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
