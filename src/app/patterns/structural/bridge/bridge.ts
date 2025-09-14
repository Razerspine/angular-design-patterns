import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {BRIDGE_CONFIG} from '@core/configs/patterns/structural';

@Component({
  selector: 'app-bridge',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './bridge.html',
  styleUrl: './bridge.scss'
})
export class Bridge {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(BRIDGE_CONFIG);
}
