import {Component, EventEmitter, Input, Output} from '@angular/core';
import { AppStateService } from '../app-state.service';
import { SpeechService } from '../speech.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  @Input()
  public searchPlaceHolder = 'Search';
  @Input()
  public hideButton = false;
  @Input()
  public buttonText = 'Go';
  search = null;

  constructor(private appStateService: AppStateService, public speechService: SpeechService) {}

  doSearch(param: any) {
    if (param) {
      this.findSpeech(param);
    } else {
      this.getAllSpeeches();
    }
  }

  getAllSpeeches() {
    this.speechService.getAllSpeeches().subscribe((res) => {
      this.appStateService.publishState(res);
    });
  }

  findSpeech(id: number) {
    this.speechService.getSpeech(id).subscribe((res) => {
      this.appStateService.publishState([res]);
    });
  }
}
