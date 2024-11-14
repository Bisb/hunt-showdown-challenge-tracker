import { Component, computed, input, output } from '@angular/core';
import { IChallenge } from '../../models/challenge';
import { NgClass } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LockSvgComponent } from './lock-svg/lock-svg.component';

@Component({
  selector: 'app-challenge',
  standalone: true,
  imports: [
    NgClass,
    NgbTooltip,
    FormsModule,
    LockSvgComponent,
  ],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.scss',
})
export class ChallengeComponent {
  challenge = input.required<IChallenge>();
  challengeChange = output<IChallenge>();

  completed = computed<boolean>(() => this.challenge().progression >= this.challenge().maxValue);
  progressionPercentage = computed<number>(() => this.challenge().progression / this.challenge().maxValue * 100);

  onProgressionChange(value: number) {
    this.challengeChange.emit({...this.challenge(), ...{progression: value}});
  }
}
