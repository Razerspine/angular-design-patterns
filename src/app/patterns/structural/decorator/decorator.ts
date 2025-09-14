import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {DECORATOR_CONFIG} from '@core/configs/patterns/structural';

@Component({
  selector: 'app-decorator',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './decorator.html',
  styleUrl: './decorator.scss'
})
export class Decorator {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(DECORATOR_CONFIG);
}
