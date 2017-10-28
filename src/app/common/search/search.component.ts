import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  @Input()
  public searchPlaceHolder = 'Search';
  @Input()
  public show = false;
  @Input()
  public buttonText = 'Go';
  @Output()
  public onSearch: EventEmitter<any> = new EventEmitter();
  search = '';

  public doSearch(param: any) {
    if (param.value !== '') {
      this.onSearch.emit({
        searchParam: param
      });
    }
  }
}
