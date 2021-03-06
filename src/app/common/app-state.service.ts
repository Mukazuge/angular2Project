import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AppStateService {
  public bulkSpeechesSubject = new BehaviorSubject<any>(0);
  public editSpeechSubject = new BehaviorSubject<any>(0);

  public publishState(data: any) {
    this.bulkSpeechesSubject.next(data);
  }

  public publishEditSpeech(data: any) {
    this.editSpeechSubject.next(data);
  }
}
