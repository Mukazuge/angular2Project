import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SpeechModel } from '../Speech.model';
import { SpeechService } from '../speech.service';
import { AppStateService } from '../app-state.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-speech',
  templateUrl: './speech-edit.component.html',
  styleUrls: ['./speech-edit.component.scss']
})

export class EditSpeechComponent implements OnInit, OnDestroy {
  @Output()
  public bulkList: EventEmitter<any> = new EventEmitter();
  @Input()
  public selectedSpeech: SpeechModel;
  subscription: Subscription;
  isEditable = false;
  isCreating = false;

  constructor(public speechService: SpeechService, public appStateService: AppStateService) {
    this.selectedSpeech = new SpeechModel();
  }

  ngOnInit() {
    this.subscription = this.appStateService.editSpeechSubject.subscribe((res) => {
      this.resetAll();
      this.isEditable = res;
      this.isCreating = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submitSpeech(form: any) {
    if (form.valid) {
      if (this.selectedSpeech.id) {
        this.updateSpeech(this.selectedSpeech.id, this.selectedSpeech);
      } else {
        this.createSpeech(this.selectedSpeech);
      }
      this.resetAll();
    } else {
      console.log('no valid form inputs');
    }
  }

  updateSpeech(id: string, payload) {
    this.speechService.updateSpeech(id, payload).subscribe((res) => {
      this.appStateService.publishState(res);
      this.bulkList.emit(true);
    });
  }

  createSpeech(payload) {
    this.speechService.createSpeech(payload).subscribe((res) => {
      this.appStateService.publishState(res);
    });
  }

  resetAll() {
    this.isEditable = false;
    this.isCreating = false;
    this.selectedSpeech = new SpeechModel();
  }

  resetFormFlags() {
    this.isEditable = false;
    this.isCreating = false;
    this.selectedSpeech = new SpeechModel();
  }
}
