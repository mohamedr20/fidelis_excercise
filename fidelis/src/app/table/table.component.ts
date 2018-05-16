import { Component, OnInit } from '@angular/core';
import {AlertsService} from '../alerts/alerts.service';
import {Alert} from '../alerts/alert';
@Component({
  selector: 'alert-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  alerts:Alert[];
  constructor(private alertService:AlertsService) {

  }
  
  ngOnInit() {
    this.alertService.getAlerts()
    .subscribe((data)=>{
    this.alerts = data;
    console.log(this.alerts)
    })
  }

  getHeros():void{
    this.alertService.getAlerts()
    .subscribe(alerts => this.alerts = alerts);
  }
}
