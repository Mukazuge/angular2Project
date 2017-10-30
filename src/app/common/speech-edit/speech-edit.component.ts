import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewContainerRef} from '@angular/core';
import { SpeechModel } from '../Speech.model';
import { SpeechService } from '../speech.service';
import { AppStateService } from '../app-state.service';
import { Subscription } from 'rxjs/Subscription';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
  dateModel = {
    year: 0,
    month: 0,
    day: 0
  };

  constructor(public speechService: SpeechService,
              public appStateService: AppStateService,
              public toastr: ToastsManager) {
    this.selectedSpeech = new SpeechModel();
  }

  ngOnInit() {
    this.subscription = this.appStateService.editSpeechSubject.subscribe((res) => {
      this.resetAll();
      this.isEditable = res.editable;
      this.isCreating = res.editable;
      this.dateModel = res.dateModel;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submitSpeech(form: any) {
    console.log(this.dateModel);
    if (form.valid) {
      this.selectedSpeech.date = `${this.dateModel.year}-${this.dateModel.month}-${this.dateModel.day}`;
      if (this.selectedSpeech.id) {
        this.updateSpeech(this.selectedSpeech.id, this.selectedSpeech);
        this.toastr.success('Speech updated', 'Success!');
      } else {
        this.createSpeech(this.selectedSpeech);
        this.toastr.success('Speech created', 'Success!');
      }
      this.resetAll();
      form.resetForm();
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
}
