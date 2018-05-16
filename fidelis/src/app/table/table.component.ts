import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {AlertService} from '../alerts/alerts.service';
import {Alert} from '../alerts/alert';

@Component({
  selector: 'alert-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  alerts:any;
  selectedAlert:Alert;
  //Accepting the inital undefined modalData variable from the parent app component
  @Input() modalData:string = ""
  @Output() updateModal:EventEmitter<Alert> = new EventEmitter<Alert>();
  
  constructor(private alertService:AlertService) {
      
  }
  
  ngOnInit() {
    //Fetching the array of alerts from the service
    this.alertService.getAlerts()
    .subscribe((data)=>{
    this.alerts = data;
    })
  }
  
  
  //Picking a row of alerts to send via output
  chooseAlert(alert:Alert):void{
    this.selectedAlert = alert;
    this.updateModal.emit(this.selectedAlert)
  }

}
