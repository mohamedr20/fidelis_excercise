import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TableComponent } from './table/table.component';
import {AlertsService} from './alerts/alerts.service';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalHelperComponent } from './modal/modal-helper/modal-helper.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ModalComponent,
    ModalHelperComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
