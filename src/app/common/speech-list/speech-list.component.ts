import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpeechModel } from '../Speech.model';
import { AppStateService } from '../app-state.service';

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
  public searchText: string;

  selectedSpeech: SpeechModel;

  constructor(public appStateService: AppStateService) {}

  selectSpeech(speech: SpeechModel) {
    this.selectedSpeech = speech;
    this.getSelectedSpeech.emit(speech);
  }

  updateSearchText(event: any) {
    this.searchText = event;
  }

  onCreateSpeech() {
    // call app state to create a speech
    this.appStateService.publishEditSpeech(true);
  }
}
