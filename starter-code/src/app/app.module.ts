import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AccessLogService } from './shared/services/access-log.service';
import { AccessLog } from './shared/models/access-log.model';

import { AppComponent } from './app.component';
import { AccessLogComponent } from './access-log/access-log.component';


@NgModule({
  declarations: [
    AppComponent,
    AccessLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ AccessLogService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
