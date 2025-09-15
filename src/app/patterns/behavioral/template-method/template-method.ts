import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {TEMPLATE_METHOD_CONFIG} from '@core/configs/patterns/behavioral';

@Component({
  selector: 'app-template-method',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './template-method.html',
  styleUrl: './template-method.scss'
})
export class TemplateMethod {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(TEMPLATE_METHOD_CONFIG);
}
