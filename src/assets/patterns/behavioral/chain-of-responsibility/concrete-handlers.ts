import {BaseHandler} from './base-handler';

export class AuthHandler extends BaseHandler {
  override handle(request: string): string | null {
    if (request === 'auth') {
      return 'AuthHandler: User authenticated';
    }
    return super.handle(request);
  }
}

export class LoggingHandler extends BaseHandler {
  override handle(request: string): string | null {
    if (request === 'log') {
      return 'LoggingHandler: Logged request';
    }
    return super.handle(request);
  }
}

export class DataHandler extends BaseHandler {
  override handle(request: string): string | null {
    if (request === 'data') {
      return 'DataHandler: Data processed';
    }
    return super.handle(request);
  }
}
