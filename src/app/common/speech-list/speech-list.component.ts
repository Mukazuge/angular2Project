import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpeechModel } from '../Speech.model';
import { AppStateService } from '../app-state.service';
import { SpeechService } from '../speech.service';

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

  constructor(public appStateService: AppStateService, public speechService: SpeechService) {}

  selectSpeech(speech: SpeechModel) {
    this.selectedSpeech = speech;
    this.speechService.getSpeech(speech.id).subscribe((res) => {
      const dateSplit = res.date.split('-');
      const dateModel = {
        year: Number(dateSplit[0]),
        month: Number(dateSplit[1]),
        day: Number(dateSplit[2])
      };
      this.getSelectedSpeech.emit(res);
      this.appStateService.publishEditSpeech({
        editable: false,
        dateModel: dateModel
      });
    });
  }

  updateSearchText(event: any) {
    this.searchText = event;
  }

  onCreateSpeech() {
    // call app state to create a speech
    this.appStateService.publishEditSpeech({
      editable: true,
      dateModel: {year: 0, month: 0, day: 0}
    });
  }
}
