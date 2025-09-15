export abstract class DataProcessor {
  process(): void {
    this.loadData();
    this.processData();
    this.saveData();
  }

  protected abstract loadData(): void;

  protected abstract processData(): void;

  protected saveData(): void {
    console.log('Saving data...');
  }
}
