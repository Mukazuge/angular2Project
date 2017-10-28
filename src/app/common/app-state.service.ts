import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AppStateService {
  public subject = new BehaviorSubject<any>(0);
  public editSpeechSubject = new BehaviorSubject<any>(0);
  public editSpeechEvent = this.editSpeechSubject.asObservable();
  public event = this.subject.asObservable();

  public publishState(data: any) {
    this.subject.next(data);
  }

  public publishEditSpeech(data: boolean) {
    this.editSpeechSubject.next(data);
  }
}
