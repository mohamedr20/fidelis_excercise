import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {AlertsService} from '../alerts/alerts.service';
import {Alert} from '../alerts/alert';

@Component({
  selector: 'alert-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  alerts:Alert[];
  selectedAlert:Alert;
  alertFilter:any;
  @Input() modalData:string = ""
  @Output() updateModal:EventEmitter<Alert> = new EventEmitter<Alert>();
  
  constructor(private alertService:AlertsService) {
      
  }
  
  ngOnInit() {
    this.alertService.getAlerts()
    .subscribe((data)=>{
    this.alerts = data;
    })
  }
  
  
  
  chooseAlert(alert:Alert):void{
    this.selectedAlert = alert;
    this.updateModal.emit(this.selectedAlert)
  }

}
