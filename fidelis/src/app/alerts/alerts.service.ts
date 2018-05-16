import { Injectable } from '@angular/core';
import {Alert} from './alert';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private http:HttpClient) { }
  
  //Alert data is fetched and returned as an Observable
  //Components can now subscribe to access the data
  getAlerts(){
    return this.http.get('../../assets/alerts.json')
  }
  
}
