import {VideoPlayer} from './video-player';
import {AudioPlayer} from './audio-player';
import {Subtitles} from './subtitles';

export class MediaFacade {
  private video = new VideoPlayer();
  private audio = new AudioPlayer();
  private subtitles = new Subtitles();

  playMovie(file: string): string[] {
    return [
      this.video.playVideo(file),
      this.audio.playAudio(file),
      this.subtitles.load(file.replace('.mp4', '.srt')),
    ];
  }
}
