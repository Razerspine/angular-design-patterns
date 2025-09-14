import {VideoService} from './video-service.interface';

export class RealVideoService implements VideoService {
  playVideo(videoId: string): string {
    return `Playing video with ID: ${videoId}`;
  }
}
