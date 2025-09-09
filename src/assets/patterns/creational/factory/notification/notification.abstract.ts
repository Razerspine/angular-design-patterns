export abstract class NotificationAbstract {
  constructor(public message: string) {}
  abstract show(): void;
}
