import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {COMPOSITE_CONFIG} from '@core/configs/patterns/structural';

@Component({
  selector: 'app-composite',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './composite.html',
  styleUrl: './composite.scss'
})
export class Composite {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(COMPOSITE_CONFIG);
}
