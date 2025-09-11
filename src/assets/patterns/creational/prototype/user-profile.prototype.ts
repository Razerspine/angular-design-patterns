export abstract class UserProfilePrototype {
  constructor(
    public name: string,
    public role: string
  ) {
  }

  abstract clone(): UserProfilePrototype;

  showInfo(): void {
    console.log(`👤 ${this.role}: ${this.name}`);
  }
}
