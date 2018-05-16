import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Alert} from './alerts/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  updateModalData(event) {
    this.modalData = event;
  }
  
  chooseAlert(alert:Alert):void{
    this.selectedAlert = alert;
    this.updateModal.emit(this.selectedAlert);
  }
}
