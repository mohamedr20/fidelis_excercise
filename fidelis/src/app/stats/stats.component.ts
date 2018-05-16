import { Component, OnInit } from '@angular/core';
import {AlertService} from '../alerts/alerts.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
 severityDataSet:any;
 protocolDataset:any;
 protocolBarChartData:any[]=  [
     {data:[],label:'Protocol Stats'}
    ]
 severityBarChartData:any[] = [
    {data:[], label: 'Severity Stats'}
  ];
  severityBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:10
                }
            }]
        }
  };
  protocolBarChartOptions:any = {
      scaleShowVerticalLines:false,
      responsive:true,
      scales:{
          yAxes:[{
              ticks:{
                  beginAtZero:10
              }
          }]
      }
  }
  severityBarChartLabels:string[] = ['Low','Medium','High'];
  protocolBarChartLabels:string[] = ['HTTP','FTP','SMTP','TLS'];
  severityBarChartType:string = 'bar';
  protocolBarChartType:string= 'bar';
  severityBarChartLegend:boolean = true;
  protocolBarChartLegend:boolean =true
  
  

 constructor(private alertService:AlertService){

 }
 
 ngOnInit(){
  this.alertService.getAlerts()
   .subscribe((data)=>{
     this.severityDataSet= data;
     this.protocolDataset = data;
     this.severityBarChartData = [{data:this.getSeverityStats(this.severityDataSet),label:'Severity Stats'}];
     this.protocolBarChartData = [{data:this.getProtocolStats(this.protocolDataset),label:'Protocol Stats',backgroundColor:'rgba(0, 0, 0, 0.9)'}];
   })
 }

  public getSeverityStats(dataSet){
   var count = [0,0,0]
    dataSet.forEach((item)=>{
      if(item.Severity == 'Low'){
        count[0] = count[0]+1;
      }
      if(item.Severity == 'Medium'){
        count[1] = count[1]+1;
      }
      if(item.Severity == 'High'){
        count[2] = count[2]+1;
      }
  });
  return count;
 }
 
 public getProtocolStats(dataSet){
     var count = [0,0,0,0];
     dataSet.forEach((item)=>{
      if(item.Protocol == 'HTTP'){
        count[0] = count[0]+1;
      }
      if(item.Protocol == 'FTP'){
        count[1] = count[1]+1;
      }
      if(item.Protocol == 'TLS'){
        count[2] = count[2]+1;
      }
      if(item.Protocol === 'SMTP'){
          count[3]  = count[3]+1
      }
  });
  return count;
 }
 

 
}
