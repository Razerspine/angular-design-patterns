import {Component, inject, WritableSignal} from '@angular/core';
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {PROTOTYPE_CONFIG} from '@core/configs/patterns/creational';
import {CodePreview} from '@shared/code-preview/code-preview';
import {TranslocoPipe} from '@ngneat/transloco';

@Component({
  selector: 'app-prototype',
  imports: [
    CodePreview,
    TranslocoPipe
  ],
  templateUrl: './prototype.html',
  styleUrl: './prototype.scss'
})
export class Prototype {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(PROTOTYPE_CONFIG);
}
