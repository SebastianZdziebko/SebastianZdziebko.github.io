import type { Project } from '../../types/project';

export const skyPlatformer2: Project = {
  title: 'Sky Platformer',
  description: {
    EN: 'A project where I focused on programming solid gameplay foundations and ensuring a smooth player experience.\n\nKey mechanics and solutions:\n\nGame State Management: Implemented a health point (HP) tracking and score collection system, directly linked to the user interface (UI).\n\nRespawn System: Instead of resetting the player to the start of the map, I created a checkpoint system that smoothly returns the character to the last safe point in case of falling into an abyss.\n\nC++ and Blueprints Integration: The game was created using both technologies, allowing for optimal code logic management and flexible work with visual elements.',
    PL: 'Projekt, w którym skupiłem się na zaprogramowaniu solidnych fundamentów rozgrywki oraz zapewnieniu płynnego doświadczenia dla gracza.\n\nKluczowe mechaniki i rozwiązania:\n\nZarządzanie stanem gry: Zaimplementowałem system śledzenia punktów życia (HP) oraz zbierania punktów, bezpośrednio spięty z interfejsem użytkownika (UI).\n\nSystem respawnu: Zamiast resetować gracza na start mapy, stworzyłem system kontrolny (checkpoints), który płynnie cofa postać do ostatniego bezpiecznego punktu w przypadku upadku w przepaść.\n\nPołączenie C++ i Blueprintów: Gra została stworzona z wykorzystaniem obu technologii, co pozwoliło na optymalne zarządzanie logiką kodu i elastyczną pracę z elementami wizualnymi.'
  },
  youtubeId: '8VjYWc5zLCI',
  blueprintId: 'pl679nbe',
  blueprintTitle: {
    EN: 'Player`s Character Blueprint',
    PL: 'Blueprint Postaci Gracza'
  },
  blueprintLabel: {
    EN: 'Blueprints Examples',
    PL: 'Przykłady Blueprintów'
  },
  tags: ['Unreal Engine 5', 'C++', 'Blueprints', 'Checkpoints', 'Points Tracker', 'Custom Components', 'Custom Level'],
  githubUrl: 'https://github.com/SebastianZdziebko/SkyPlatformer',
  status: {
    EN: 'Completed',
    PL: 'Ukończono'
  },
  updates: [
    { note: { EN: 'Published completed game project.', PL: 'Udostępniono skończony projekt gry.' } },
  ]
};
