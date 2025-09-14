import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {ADAPTER_CONFIG} from '@core/configs/patterns/structural';

@Component({
  selector: 'app-adapter',
  standalone: true,
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './adapter.html',
  styleUrl: './adapter.scss'
})
export class Adapter {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(ADAPTER_CONFIG);
}
