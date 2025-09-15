import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {OBSERVER_CONFIG} from '@core/configs/patterns/behavioral';

@Component({
  selector: 'app-observer',
  standalone: true,
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './observer.html',
  styleUrl: './observer.scss'
})
export class Observer {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(OBSERVER_CONFIG);
}
