export type ChallengeType = 'pve' | 'pvp';
export type DamageType = 'poison' | 'bleed' | 'fire' | 'high-velocity';

export interface IChallenge {
  name: string;
  maxValue: number;
  progression: number;
  type: ChallengeType;
  dmgType?: DamageType;
  eventPoints: number;
  bloodBounds: number;
  battlePass: boolean
}

