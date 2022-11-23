import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//import PlaylistItem from '../interfaces/playlist-item.interface';
import { VideoService } from './video.service';
import { Channel } from '../model/channel.model';

@Injectable({
  providedIn: 'root'
})
export class VideoPlaylistService {
  private list = new BehaviorSubject<Channel[]>([]);
  private currentVideo = new BehaviorSubject<string>('');
  private shouldPlayNext = new BehaviorSubject<boolean>(true);

  public constructor(private videoService: VideoService) { }

  public setShouldPlayNext(playNext: boolean): void {
    this.shouldPlayNext.next(playNext);
  }

  public get shouldPlayNext$(): Observable<boolean> {
    return this.shouldPlayNext.asObservable();
  }

  public get list$(): Observable<Channel[]> {
    return this.list.asObservable();
  }

  public get currentVideo$(): Observable<string> {
    return this.currentVideo.asObservable();
  }

  public setCurrentVideo(video: string): void {
    if (this.currentVideo.getValue() !== video) {
      this.currentVideo.next(video);
      this.videoService.pause();
    }
  }

  public playNextVideo(): void {
    const activeIndex = this.list.getValue().findIndex(video => this.currentVideo.getValue() === video.stream.url);
    this.setCurrentVideoByIndex(activeIndex + 1);
  }

  public setCurrentVideoByIndex(index: number): void {
    this.setCurrentVideo(this.list.getValue()[index].stream.url);
  }

  public fetchList(endpoint: Channel[]): void {
    console.log(endpoint);
    //this.list = endpoint;
    //this.list.next(endpoint[0].stream.url);
    //this.setCurrentVideo(endpoint[0].stream.url);

        this.list.next(endpoint);
        this.setCurrentVideo(endpoint[0].stream.url);
  }

}
