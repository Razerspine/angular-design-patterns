import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileLoaderService} from '@core/services/file-loader.service';
import {FACTORY_CONFIG} from '@core/configs/patterns/creational';
import {CodePreview} from '@shared/code-preview/code-preview';
import {PreviewDataType} from '@core/models/preview-data';
import {TranslocoPipe} from '@ngneat/transloco';

@Component({
  selector: 'app-factory',
  standalone: true,
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './factory.html',
  styleUrl: './factory.scss'
})
export class Factory {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(FACTORY_CONFIG);
}
