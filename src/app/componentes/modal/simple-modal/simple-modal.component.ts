import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Detalle } from '../../../_model/detalle';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() titulo: string;
  @Input() labelButton: string;
  @Input() detalle: Detalle[];

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() { }
}