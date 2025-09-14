import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {PROXY_CONFIG} from '@core/configs/patterns/structural';

@Component({
  selector: 'app-proxy',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './proxy.html',
  styleUrl: './proxy.scss'
})
export class Proxy {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(PROXY_CONFIG);
}
