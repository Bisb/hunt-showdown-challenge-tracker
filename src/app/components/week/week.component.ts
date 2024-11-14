import { Component, input, output } from '@angular/core';
import { IWeek } from '../../models/week';
import { ChallengeComponent } from '../challenge/challenge.component';
import { IChallenge } from '../../models/challenge';

@Component({
  selector: 'app-week',
  standalone: true,
  imports: [
    ChallengeComponent,
  ],
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss',
})
export class WeekComponent {
  week = input.required<IWeek>();
  weekChange = output<IWeek>();

  onChallengeUpdated(challenge: IChallenge, index: number) {
    const week = this.week();
    week.challenges[index] = challenge;
    this.weekChange.emit({...this.week(), ...week});
  }

  toggleHidden() {
    this.weekChange.emit({...this.week(),...{hidden:!this.week().hidden}})
  }
}
