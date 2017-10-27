import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppStateService} from '../common/app-state.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(public appState: AppStateService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.appState.event.subscribe((res) => console.log('retrieve data from mock: ', res ? res : 'It\'s a Trap!'));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goMock() {
    this.router.navigate(['mock']).then(() => {
      this.appState.publishState('data from home');
    });
  }
}
