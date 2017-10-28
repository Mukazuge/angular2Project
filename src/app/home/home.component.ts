import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStateService } from '../common/app-state.service';
import { Subscription } from 'rxjs/Subscription';
import { mockSpeeches } from '../common/mock-data';
import { SpeechModel } from '../common/Speech.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  speeches = mockSpeeches;
  speech: SpeechModel;

  constructor(public appState: AppStateService) {
    this.speech = new SpeechModel();
  }

  ngOnInit() {
    this.subscription = this.appState.event.subscribe((res) => {
      if (res) {
        console.log('search is: ', res);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getSelectedSpeech(event: SpeechModel) {
    this.speech = event;
  }
}
