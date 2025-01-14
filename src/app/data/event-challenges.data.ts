import { IEvent } from '../models/event';

export const events: IEvent[] = [
  {
    name: 'Harvest of Ghosts',
    weeks: [
      {
        number: 1,
        challenges: [
          {
            battlePass: true,
            name: 'Kill grunts',
            maxValue: 80,
            type: 'pve',
            progression: 5,
            bloodBounds: 0,
            eventPoints: 1500,
          },
          {
            battlePass: false,
            name: 'Smash pumpkins',
            maxValue: 50,
            type: 'pve',
            dmgType: 'high-velocity',
            progression: 50,
            bloodBounds: 10,
            eventPoints: 750,
          },
          {
            battlePass: false,
            name: 'Collect clues or close rifts',
            maxValue: 18,
            type: 'pve',
            progression: 0,
            bloodBounds: 10,
            eventPoints: 750,
          },
          {
            battlePass: false,
            name: 'Set enemy Hunters on fire',
            maxValue: 10,
            type: 'pvp',
            progression: 0,
            dmgType: 'fire',
            bloodBounds: 10,
            eventPoints: 1000,
          },
          {
            battlePass: false,
            name: 'Deal damage to enemy Hunters using Rifles',
            maxValue: 1500,
            type: 'pve',
            dmgType: 'poison',
            progression: 489,
            bloodBounds: 10,
            eventPoints: 1000,
          },
          {
            battlePass: false,
            name: 'Deal damage to enemy Hunters using any variant of Rival 78',
            maxValue: 10,
            type: 'pve',
            dmgType: 'bleed',
            progression: 0,
            bloodBounds: 10,
            eventPoints: 1000,
          },
        ],
      },
      {
        number: 2,
        challenges: [
          {
            battlePass: true,
            name: 'Kill grunts',
            maxValue: 10,
            type: 'pve',
            progression: 5,
            bloodBounds: 10,
            eventPoints: 1000,
          },
          {
            battlePass: false,
            name: 'Smash pumpkins',
            maxValue: 10,
            type: 'pve',
            progression: 0,
            bloodBounds: 10,
            eventPoints: 1000,
          },
          {
            battlePass: false,
            name: 'Collect clues or close rifts',
            maxValue: 10,
            type: 'pve',
            progression: 0,
            bloodBounds: 10,
            eventPoints: 1000,
          },
          {
            battlePass: false,
            name: 'Deal damage to enemy Hunters using: High Velocity Ammo',
            maxValue: 10,
            type: 'pvp',
            progression: 0,
            dmgType: 'fire',
            bloodBounds: 10,
            eventPoints: 1000,
          },
          {
            battlePass: false,
            name: 'Kill grunts',
            maxValue: 10,
            type: 'pve',
            progression: 5,
            bloodBounds: 10,
            eventPoints: 1000,
          },
          {
            battlePass: false,
            name: 'Smash pumpkins',
            maxValue: 10,
            type: 'pve',
            progression: 0,
            bloodBounds: 10,
            eventPoints: 1000,
          },
        ],
      },
      {
        number: 3,
        challenges: [
          {
            battlePass: true,
            name: 'Collect clues or Rifts',
            maxValue: 18,
            type: 'pve',
            progression: 0,
            bloodBounds: 0,
            eventPoints: 1500,
          },
          {
            battlePass: false,
            name: 'Kill Monsters with: Melee Damage',
            maxValue: 125,
            type: 'pve',
            progression: 0,
            bloodBounds: 10,
            eventPoints: 750,
          },
          {
            battlePass: false,
            name: 'Restore Health for yourself or for your teammates',
            maxValue: 2000,
            type: 'pve',
            progression: 0,
            bloodBounds: 10,
            eventPoints: 750,
          },
          {
            battlePass: false,
            name: 'Make enemy Hunters bleed',
            maxValue: 10,
            type: 'pvp',
            progression: 0,
            dmgType: 'bleed',
            bloodBounds: 10,
            eventPoints: 1000,
          },
          {
            battlePass: false,
            name: 'Deal damage to enemy Hunters using: Shotguns',
            maxValue: 750,
            type: 'pvp',
            progression: 0,
            bloodBounds: 10,
            eventPoints: 1000,
          },
          {
            battlePass: false,
            name: 'Deal damage to enemy Hunters using any variant of: Mosin-Nagant',
            maxValue: 1000,
            type: 'pvp',
            progression: 0,
            bloodBounds: 10,
            eventPoints: 1000,
          },
        ],
      },
    ],
  },
];
