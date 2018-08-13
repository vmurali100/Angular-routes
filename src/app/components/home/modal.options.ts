import {Component,ViewChild} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-options',
  templateUrl: './modal.options.html',
//   encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class NgbdModalOptions {
  closeResult: string;
@ViewChild('content') modalLg;
  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'sm' , windowClass: 'custom-modal'});
    console.log(this.modalLg)
    
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}