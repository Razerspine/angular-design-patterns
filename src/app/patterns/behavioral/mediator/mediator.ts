import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {MEDIATOR_CONFIG} from '@core/configs/patterns/behavioral';

@Component({
  selector: 'app-mediator',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './mediator.html',
  styleUrl: './mediator.scss'
})
export class Mediator {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(MEDIATOR_CONFIG);
}
