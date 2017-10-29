import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SpeechModel } from '../Speech.model';
import { SpeechService } from '../speech.service';
import { AppStateService } from '../app-state.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-speech',
  templateUrl: './speech-edit.component.html',
  styleUrls: ['./speech-edit.component.scss']
})

export class EditSpeechComponent implements OnInit, OnDestroy {
  @Input()
  public setSelectedSpeech: SpeechModel;
  isEditable: false;
  hasDeleted: false;
  subscription: Subscription;

  constructor(public speechService: SpeechService, public appStateService: AppStateService) {
    this.setSelectedSpeech = new SpeechModel();
  }

  ngOnInit() {
    this.subscription = this.appStateService.editSpeechSubject.subscribe((res) => {
      console.log('test: ', res);
      this.resetAll();
      this.isEditable = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submitSpeech(form: any) {
    console.log(form);
    if (form.valid) {
      if (this.setSelectedSpeech.id) {
        this.updateSpeech(this.setSelectedSpeech.id, this.setSelectedSpeech);
      } else {
        this.createSpeech(this.setSelectedSpeech);
      }
      this.resetAll();
      this.isEditable = false;
    } else {
      console.log('no valid form inputs');
    }
  }

  updateSpeech(id: number, payload) {
    this.speechService.updateSpeech(id, payload).subscribe((res) => {
      this.appStateService.publishState(res);
    });
  }

  createSpeech(payload) {
    this.speechService.createSpeech(payload).subscribe((res) => {
      this.appStateService.publishState(res);
    });
  }

  resetAll() {
    this.setSelectedSpeech = new SpeechModel();
  }
}
