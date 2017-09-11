import { Component, OnInit } from '@angular/core';
import { setInterval, setTimeout } from 'timers';
import  { AccessLogService } from '../shared/services/access-log.service';

@Component({
  selector: 'app-access-log',
  templateUrl: './access-log.component.html',
  styleUrls: ['./access-log.component.css'],
  providers: [ AccessLogService ]
})

export class AccessLogComponent implements OnInit {
  person: string;
  message: string;
  showSuccessMessage: boolean = false;

  constructor(private accessLogService: AccessLogService) {}

  ngOnInit() {}

  onLogFormSubmit(form) {
    this.accessLogService.addAccessItem(this.person, this.message);

    form.reset();
    this.showSuccessMessage = true;
    setTimeout( () => this.showSuccessMessage = false, 1000);

    this.showAccessLog();
  }
  showAccessLog() {
    console.log('======== Access Log ========');
    for(let accessLog of this.accessLogService.getAccessLog()) {
      console.log(accessLog);
    }
  }
}
