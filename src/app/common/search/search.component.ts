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

  findSpeech(searchParam: string) {
    this.speechService.searchSpeech(searchParam).subscribe((res) => {
      console.log(res);
      if (res) {
        this.appStateService.publishState(res);
      } else {
        console.log('id not Found: ', res);
      }
    });
  }
}
