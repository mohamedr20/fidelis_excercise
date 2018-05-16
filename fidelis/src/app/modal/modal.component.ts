import { Component, OnInit,TemplateRef,Input,OnChanges,ElementRef,ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('template') el:ElementRef;
  constructor(private modalService: BsModalService) {}
  
  @Input() modalData:string;
  
  ngOnInit(){
    
  }
  
  ngOnChanges(){
    if(this.modalData !== undefined){
     this.openModal(this.el)
    }
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'large gray ' })
      );
  }

}
