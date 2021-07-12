import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string;
  public showTime: boolean;
  public time: string;
  public timezone: string;
  public timeResp: string;
  public timezoneResp: string;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.title = 'UTC Time';
    this.showTime = false;
    this.time = '16:50:00';
    this.timezone = '-4';
    this.timeResp = '';
    this.timezoneResp = '';
    this.timeResp = '';
  }

  public requestTime(): void {
    if (this.time === '' || this.timezone === '') {
      alert('Los campos no pueden estar vacios');
    } else {
      this.appService.getUtcTime({
        time: this.time,
        timezone: this.timezone
      }).subscribe( (resp: any) => {
        this.showTime = true;
        this.timeResp = resp.response.time;
        this.timezoneResp = resp.response.timezone;
      }, (err) => console.log(err) );
    }
  }
}
