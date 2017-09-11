import { Injectable } from '@angular/core';
import { AccessLog } from '../models/access-log.model';

@Injectable()
export class AccessLogService {

  log: Array<AccessLog> = [];

  constructor() { }

  getAccessLog(): Array<AccessLog> {
    return this.log;
  }

  addAccessItem(person: string, message: string): void {
    this.log.push(new AccessLog(person, message));
  }
}
