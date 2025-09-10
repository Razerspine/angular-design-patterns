import {Component, inject, WritableSignal} from '@angular/core';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {ABSTRACT_FACTORY_CONFIG} from '@core/configs/patterns/creational';

@Component({
  selector: 'app-abstract-factory',
  imports: [
    CodePreview,
    TranslocoPipe
  ],
  templateUrl: './abstract-factory.html',
  styleUrl: './abstract-factory.scss'
})
export class AbstractFactory {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(ABSTRACT_FACTORY_CONFIG);
}
