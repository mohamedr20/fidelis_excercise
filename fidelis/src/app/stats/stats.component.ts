import { Component, OnInit } from '@angular/core';
import {AlertsService} from '../alerts/alerts.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
 dataSet:any[];
 barChartData:Array<any>;
  public barChartOptions:any = {
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
  public barChartLabels:string[] = ['Low','Medium','High'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

 constructor(private alertService:AlertsService){

 }
 
 ngOnInit(){
  this.alertService.getAlerts()
   .subscribe((data)=>{
     this.dataSet = data
     this.barChartData = [{data:this.getSeverityStats(this.dataSet),label:'Severity Stats'}]
   })
 }
   public barChartData:any[] = [
    {data:[], label: 'Severity Stats'},
  ];
 public getSeverityStats(dataSet):[]{
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
 

 
}
