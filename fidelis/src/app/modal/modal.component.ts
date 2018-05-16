import { Component, OnInit,TemplateRef,Input,OnChanges,ElementRef,ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Alert} from '../alerts/alert';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('template') el:ElementRef;
  constructor(private modalService: BsModalService) {}
  
  //The modal ends up with the row data here
  @Input() modalData:Alert;
  
  ngOnInit(){
    
  }
  
  //If the modal data is not undefined, then the modal should open
  ngOnChanges(){
    if(this.modalData !== undefined){
     this.openModal(this.el)
    }
  }
  
  //Template for the modal is passed in here and opened
  openModal(template: ElementRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'large gray ' })
      );
  }

}
