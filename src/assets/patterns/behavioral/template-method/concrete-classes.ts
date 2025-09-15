import {DataProcessor} from './abstract-class';

export class CsvDataProcessor extends DataProcessor {
  protected loadData(): void {
    console.log('Loading data from CSV file');
  }

  protected processData(): void {
    console.log('Processing CSV data...');
  }
}

export class ApiDataProcessor extends DataProcessor {
  protected loadData(): void {
    console.log('Loading data from API');
  }

  protected processData(): void {
    console.log('Processing API data...');
  }
}
