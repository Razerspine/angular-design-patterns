import {VideoService} from './video-service.interface';
import {RealVideoService} from './real-video-service';

export class VideoServiceProxy implements VideoService {
  private realService: RealVideoService;
  private cache: Map<string, string> = new Map();

  constructor() {
    this.realService = new RealVideoService();
  }

  playVideo(videoId: string): string {
    if (this.cache.has(videoId)) {
      return `Cached: ${this.cache.get(videoId)}`;
    }
    const result = this.realService.playVideo(videoId);
    this.cache.set(videoId, result);
    return result;
  }
}
