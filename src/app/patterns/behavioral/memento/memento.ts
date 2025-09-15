import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {MEMENTO_CONFIG} from '@core/configs/patterns/behavioral';

@Component({
  selector: 'app-memento',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './memento.html',
  styleUrl: './memento.scss'
})
export class Memento {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(MEMENTO_CONFIG);
}
