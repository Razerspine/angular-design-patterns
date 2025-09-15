import {Component, inject, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodePreview} from "@shared/code-preview/code-preview";
import {TranslocoPipe} from "@ngneat/transloco";
import {FileLoaderService} from '@core/services/file-loader.service';
import {PreviewDataType} from '@core/models/preview-data';
import {COMMAND_CONFIG} from '@core/configs/patterns/behavioral';

@Component({
  selector: 'app-command',
  imports: [CommonModule, CodePreview, TranslocoPipe],
  templateUrl: './command.html',
  styleUrl: './command.scss'
})
export class Command {
  private fileLoader = inject(FileLoaderService);
  previewData: WritableSignal<PreviewDataType[]> = this.fileLoader.loadFiles(COMMAND_CONFIG);
}
