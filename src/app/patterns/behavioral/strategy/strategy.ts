import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {STRATEGY_CONFIG} from '@core/configs/patterns/behavioral';

@Component({
  selector: 'app-strategy',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './strategy.html',
  styleUrl: './strategy.scss'
})
export class Strategy {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(STRATEGY_CONFIG);
}
