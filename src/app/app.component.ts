import { Component, OnInit, OnDestroy } from '@angular/core';
import { Country } from './model/country.model';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Channel } from './model/channel.model';
import { VideoPlaylistService } from 'src/app/services/video-playlist.service';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private router: Router, private http: HttpClient, private videoPlaylistService: VideoPlaylistService) { }

  public channels!: Channel[];

  ngOnInit(): void {
    history.pushState(null, '');
    fromEvent(window, 'popstate')
    .pipe(takeUntil(this.unsubscriber))
    .subscribe((_) => {
      history.pushState(null, '');
      this.showError = true;
    });
  }

  showHome = true;
  showListChannels = false;

  public title = 'English On Tv';

  gridColumns = 4;

  countries: Country[] = [
    new Country('Australia',
      'AU',
      'eng',
      '🇦🇺',
      'australia'),
    new Country('Canada',
      'CA',
      'eng',
      '🇨🇦',
      'canada'),
    new Country('Ireland',
      'IE',
      'gle',
      '🇮🇪',
      'ireland'),
    new Country('Jamaica',
      'JM',
      'eng',
      '🇯🇲',
      'jamaica'),
    new Country('New Zealand',
      'NZ',
      'eng',
      '🇳🇿',
      'newzealand'),
    new Country('South Africa',
      'ZA',
      'afr',
      '🇿🇦',
      'southafrica'),
    new Country('United Kingdom',
      'UK',
      'eng',
      '🇬🇧',
      'unitedkingdom'),
    new Country('United States',
      'US',
      'eng',
      '🇺🇸',
      'unitedstates')
  ];


  selectionCountry(country: Country) {
    if (country != null) {
      console.log(country.name);
      this.showListChannels = true;
      this.showHome = false;
      this.buscaChannels(country.code);
    }
  }

  buscaChannels(code: string) {
    this.http.get<any>('http://ec2-18-118-49-145.us-east-2.compute.amazonaws.com:8080/api/channelscountry?country=' + code).subscribe(data => {
      this.channels = data;
      this.videoPlaylistService.fetchList(this.channels);
      //console.log(this.channels.length);
    })
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

}
