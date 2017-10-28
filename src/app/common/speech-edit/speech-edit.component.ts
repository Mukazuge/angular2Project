import { Component } from '@angular/core';
import {SpeechModel} from './Speech.model';

@Component({
  selector: 'app-edit-speech',
  templateUrl: './speech-edit.component.html',
  styleUrls: ['./speech-edit.component.scss']
})

export class EditSpeechComponent {
  speechModel: SpeechModel;

  constructor() {
    this.speechModel = new SpeechModel();
  }

  submitSpeech(form: any) {
    if (form.valid) {
      console.log('form: ', form);
    } else {
      console.log('no valid form inputs');
    }
  }
}
