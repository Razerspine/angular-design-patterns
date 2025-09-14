import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {FLYWEIGHT_CONFIG} from '@core/configs/patterns/structural';

@Component({
  selector: 'app-flyweight',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './flyweight.html',
  styleUrl: './flyweight.scss'
})
export class Flyweight {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(FLYWEIGHT_CONFIG);
}
