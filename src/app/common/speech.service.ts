import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {SpeechModel} from './Speech.model';

@Injectable()
export class SpeechService {
  baseUrl = 'http://mockapi.hnb.mx:8000/speech';

  constructor(public http: Http) {}

  getAllSpeeches() {
    return this.http.get(this.baseUrl).map(res => {
      return res.json();
    });
  }

  getSpeech(id: number) {
    return this.http.get(this.baseUrl + '/' + id).map(res => {
      return res.json();
    });
  }

  deleteSpeech(id: number) {
    return this.http.delete(this.baseUrl + '/' + id).map(res => {
      return res.json();
    });
  }

  updateSpeech(id: number, payload: SpeechModel) {
    return this.http.put(this.baseUrl + '/' + id, payload).map(res => {
      return res.json();
    });
  }

  createSpeech(payload: SpeechModel) {
    return this.http.post(this.baseUrl, payload).map(res => {
      return res.json();
    });
  }
}
