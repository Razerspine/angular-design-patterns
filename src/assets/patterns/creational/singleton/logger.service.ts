import {Injectable} from '@angular/core';
import {Logger} from './logger.singleton';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private logger = Logger.getInstance();

  addLog(message: string): void {
    this.logger.log(message);
  }

  getLogs(): string[] {
    return this.logger.getLogs();
  }
}
