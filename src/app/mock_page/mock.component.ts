import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppStateService} from '../common/app-state.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html'
})

export class MockComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(public appState: AppStateService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.appState.event.subscribe((res) => console.log('retrieve data from home: ', res ? res : 'It\'s a Trap!'));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goHome() {
    this.router.navigate(['/']).then(() => {
      this.appState.publishState('data from mock');
    });
  }
}
