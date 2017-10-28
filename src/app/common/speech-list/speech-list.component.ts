import {Component, Input, Output, EventEmitter} from '@angular/core';
import {SpeechModel} from '../Speech.model';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.scss']
})

export class SpeechListComponent {
  @Output()
  public getSelectedSpeech: EventEmitter<any> = new EventEmitter();
  @Input()
  public speeches: Array<SpeechModel> = [];

  selectSpeech(speech: SpeechModel) {
    this.getSelectedSpeech.emit(speech);
  }
}
