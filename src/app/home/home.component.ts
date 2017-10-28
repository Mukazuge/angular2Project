import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStateService } from '../common/app-state.service';
import { Subscription } from 'rxjs/Subscription';
import { SpeechModel } from '../common/Speech.model';
import { SpeechService } from '../common/speech.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  speeches = [];
  speech: SpeechModel;

  constructor(public appState: AppStateService, public speechService: SpeechService) {
    this.speech = new SpeechModel();
  }

  ngOnInit() {
    this.subscription = this.appState.event.subscribe((res) => {
      if (res) {
        this.speeches = res;
      } else {
        this.getAllSpeeches();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getSelectedSpeech(event: SpeechModel) {
    this.speech = event;
  }

  getAllSpeeches() {
    this.speechService.getAllSpeeches().subscribe((res) => {
      this.speeches = res;
    });
  }

  updateSpeech(id: number) {
    this.speechService.updateSpeech(id, this.speech).subscribe((res) => {
      console.log(res);
    });
  }

  createSpeech() {
    this.speechService.createSpeech(this.speech).subscribe((res) => {
      console.log(res);
    });
  }
}
