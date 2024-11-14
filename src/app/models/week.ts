import { IChallenge } from './challenge';

export interface IWeek {
  number: number;
  challenges: IChallenge[];
  hidden?: boolean;
}
