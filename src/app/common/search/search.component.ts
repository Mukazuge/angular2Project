import {Component, EventEmitter, Input, Output} from '@angular/core';
import { AppStateService } from '../app-state.service';

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
  search = '';

  constructor(private appStateService: AppStateService) {}

  doSearch(param: any) {
    if (param !== '') {
      this.appStateService.publishState(param);
    }
  }
}
