import {Component, Input, Output, EventEmitter} from '@angular/core';
import {SpeechModel} from '../Speech.model';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.scss']
})

export class SpeechListComponent {
  selectedSpeech: SpeechModel;

  @Output()
  public getSelectedSpeech: EventEmitter<any> = new EventEmitter();
  @Input()
  public speeches: Array<SpeechModel> = [];

  selectSpeech(speech: SpeechModel) {
    this.selectedSpeech = speech;
    this.getSelectedSpeech.emit(speech);
  }

  onSearch(event: any) {
    if (event.searchParam !== '') {
      console.log(event.searchParam);
    }
  }
}
