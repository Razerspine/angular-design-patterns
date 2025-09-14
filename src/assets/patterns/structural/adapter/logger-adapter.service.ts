import {Injectable} from '@angular/core';
import {Logger} from './logger.interface';
import {ThirdPartyLogger} from './third-party-logger';

@Injectable({providedIn: 'root'})
export class LoggerAdapterService implements Logger {
  private thirdPartyLogger = new ThirdPartyLogger();

  log(message: string): void {
    this.thirdPartyLogger.writeInfo(message);
  }

  error(message: string): void {
    this.thirdPartyLogger.writeError(message);
  }
}
