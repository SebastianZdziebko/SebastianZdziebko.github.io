import type { Project } from '../../types/project';

export const skyPlatformer: Project = {
  title: 'Tower Survivor',
  description: {
    EN: 'A 3D platforming game focusing on classic mechanics, including point collection, power-ups, and a full player life circle featuring world-based respawning.',
    PL: 'Platformowa gra 3D kładąca nacisk na mechaniki typowe dla gatunku, takie jak zbieranie punktów, obsługa wzmocnień oraz zarządzanie cyklem życia gracza na zasadzie jego ponownego spawnowania w świecie gry.'
  },
  youtubeId: 'qC5K9Sst_Y8',
  blueprintId: 'pl679nbe',
  blueprintTitle: {
    EN: 'Player`s Character Blueprint',
    PL: 'Blueprint Postaci Gracza'
  },
  blueprintLabel: {
    EN: 'Blueprints Examples',
    PL: 'Przykłady Blueprintów'
  },
  tags: ['Unreal Engine 5', 'C++', 'Event-Subscriber', 'Interfaces'],
  githubUrl: '#',
  status: {
    EN: 'Completed',
    PL: 'Ukończono'
  },
  updates: [
    { note: { EN: 'Published completed game project.', PL: 'Udostępniono skończony projekt gry.' } },
  ]
};
