import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {VISITOR_CONFIG} from '@core/configs/patterns/behavioral';

@Component({
  selector: 'app-visitor',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './visitor.html',
  styleUrl: './visitor.scss'
})
export class Visitor {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(VISITOR_CONFIG);
}
