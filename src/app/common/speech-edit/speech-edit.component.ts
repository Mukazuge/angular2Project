import { Component, Input } from '@angular/core';
import { SpeechModel } from '../Speech.model';
import { SpeechService } from '../speech.service';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-edit-speech',
  templateUrl: './speech-edit.component.html',
  styleUrls: ['./speech-edit.component.scss']
})

export class EditSpeechComponent {
  @Input()
  public setSelectedSpeech: SpeechModel;

  constructor(public speechService: SpeechService, public appStateService: AppStateService) {
    this.setSelectedSpeech = new SpeechModel();
  }

  submitSpeech(form: any) {
    console.log(form);
    if (form.valid) {
      if (this.setSelectedSpeech.id) {
        this.updateSpeech(this.setSelectedSpeech.id, this.setSelectedSpeech);
      } else {
        this.createSpeech(this.setSelectedSpeech);
      }
    } else {
      console.log('no valid form inputs');
    }
  }

  deleteSpeech() {
    if (this.setSelectedSpeech.id) {
      this.speechService.deleteSpeech(this.setSelectedSpeech.id).subscribe((res) => {
        console.log('deleting: ', res);
        this.appStateService.publishState(res);
      }, error => {
        console.log('error: ', error);
      });
    } else {
      console.log('select a field first!');
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
