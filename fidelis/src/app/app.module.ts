import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { TableComponent } from './table/table.component';
import {AlertsService} from './alerts/alerts.service';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StatsComponent } from './stats/stats.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ModalComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ModalModule.forRoot()
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
