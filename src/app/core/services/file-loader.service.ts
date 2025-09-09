import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PatternDataType} from '@core/models';
import {PreviewDataType} from '@core/models/preview-data';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {
  private http = inject(HttpClient);

  loadFiles(data: PatternDataType[]): WritableSignal<PreviewDataType[]> {
    const previewData: WritableSignal<PreviewDataType[]> = signal([]);

    const requests$: Observable<string>[] = data.map((item) =>
      this.http.get(item.filePath, {responseType: 'text'})
    );

    combineLatest(requests$).subscribe({
      next: (response: string[]) => {
        const response$: PreviewDataType[] = response.map((item, index) => ({
          fileName: data[index].fileName,
          file: item,
          previewDescription: data[index].previewDescription
        }));
        previewData.set(response$);
      },
      error: (error) => {
        console.error('Error loading files: ', error);
      }
    });

    return previewData;
  }
}
