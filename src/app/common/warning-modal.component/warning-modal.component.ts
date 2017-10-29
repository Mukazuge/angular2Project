import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { AppStateService } from '../app-state.service';
import { SpeechModel } from '../Speech.model';
import { SpeechService } from '../speech.service';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.scss']
})

export class WarningModalComponent {
  @Output()
  public cleanFrom: EventEmitter<any> = new EventEmitter();
  @Input()
  public selectedSpeech: SpeechModel;
  @Input()
  public disableButton: boolean;
  private modalRef: NgbModalRef;
  closeResult: string;

  constructor(private modalService: NgbModal,
    public appStateService: AppStateService,
    public speechService: SpeechService) {
    this.selectedSpeech = new SpeechModel();
  }

  openModal(modal) {
    this.modalRef = this.modalService.open(modal);
    // for future posible features
    this.modalRef.result.then((res) => {
      this.closeResult = `Close with: ${res}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any) {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deleteSpeech() {
    if (this.selectedSpeech.id) {
      this.speechService.deleteSpeech(this.selectedSpeech.id).subscribe(() => {
        this.appStateService.publishState(true);
        this.cleanFrom.emit();
        this.modalRef.close();
      }, error => {
        console.log('error: ', error);
      });
    } else {
      console.log('select a field first!');
    }
  }
}
