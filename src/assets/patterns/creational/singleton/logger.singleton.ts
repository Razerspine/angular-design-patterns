export class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    const entry = `${new Date().toISOString()} - ${message}`;
    this.logs.push(entry);
    console.log(entry);
  }

  getLogs(): string[] {
    return this.logs;
  }
}
