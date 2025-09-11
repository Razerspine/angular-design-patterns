import {Component, inject, WritableSignal} from '@angular/core';
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {SINGLETON_CONFIG} from '@core/configs/patterns/creational';
import {CodePreview} from '@shared/code-preview/code-preview';
import {TranslocoPipe} from '@ngneat/transloco';

@Component({
  selector: 'app-singleton',
  imports: [
    CodePreview,
    TranslocoPipe
  ],
  templateUrl: './singleton.html',
  styleUrl: './singleton.scss'
})
export class Singleton {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(SINGLETON_CONFIG);
}
