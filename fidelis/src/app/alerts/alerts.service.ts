import { Injectable } from '@angular/core';
import {Alert} from './alert';
import { Observable, of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

// var headers = new Headers();

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private http:HttpClient) { }
  
  getAlerts():Observable<Alert[]>{
    return this.http.get('../../assets/alerts.json')
  }
  
  randomFunction():null{
    return 5;
  }
  
}
