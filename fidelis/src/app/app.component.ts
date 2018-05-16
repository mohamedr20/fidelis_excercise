import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Alert} from './alerts/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalData:any;
  selectedAlert:any; 
  
  //Once the modalData is updated it is send back down the the modal component
  @Output() updateModal:EventEmitter<Alert> = new EventEmitter<Alert>();
  
  updateModalData(event) {
    this.modalData = event;
  }
  
  chooseAlert(alert:Alert):void{
    this.selectedAlert = alert;
    this.updateModal.emit(this.selectedAlert);
  }
}
