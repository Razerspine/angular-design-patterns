import {Component, inject, input, InputSignal} from '@angular/core';
import {Highlight} from 'ngx-highlightjs';
import {Button} from 'primeng/button';
import {MessageService} from 'primeng/api';
import {TranslocoPipe} from '@ngneat/transloco';

@Component({
  selector: 'app-code-preview',
  imports: [
    Highlight,
    Button,
    TranslocoPipe
  ],
  templateUrl: './code-preview.html',
  styleUrl: './code-preview.scss'
})
export class CodePreview {
  private messageService = inject(MessageService);
  fileName: InputSignal<string> = input.required();
  code: InputSignal<string> = input.required();
  description: InputSignal<string> = input.required();

  async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.code());
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Code copied!'});
    } catch (error) {
      console.error('Error copy', error);
    }
  }
}
