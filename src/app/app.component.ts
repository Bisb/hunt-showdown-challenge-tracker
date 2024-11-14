import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { NgClass } from '@angular/common';
import { SettingsService } from './services/settings.service';
import { WeekComponent } from './components/week/week.component';
import { IEvent } from './models/event';
import { events } from './data/event-challenges.data';
import { SettingsComponent } from './components/options/settings.component';
import { IWeek } from './models/week';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChallengeComponent, NgClass, WeekComponent, SettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  settings = inject(SettingsService);

  constructor() {
    this._events = localStorage.getItem('events') ?
      JSON.parse(localStorage.getItem('events')!) :
      events;
    console.log(this.events);
  }

  private _events: IEvent[];

  get events(): IEvent[] {
    return this._events;
  }

  set events(value: IEvent[]) {
    this._events = value;
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  onWeekUpdated(week: IWeek, eventIndex: number, weekIndex: number) {
    const events = this.events;
    events[eventIndex]['weeks'][weekIndex] = week;
    this.events = events;
  }
}
