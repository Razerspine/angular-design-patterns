import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {FACADE_CONFIG} from '@core/configs/patterns/structural';

@Component({
  selector: 'app-facade',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './facade.html',
  styleUrl: './facade.scss'
})
export class Facade {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(FACADE_CONFIG);
}
