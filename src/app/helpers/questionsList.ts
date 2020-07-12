import { Question } from '../models/Question';

export const questionsList: Question[] = [
  {
    id: 1,
    questionText: 'What is your estimate skill level?',
    options: [
      { text: 'Beginner' },
      { text: 'Experienced' },
      { text: 'Professional' },
    ],
  },
  {
    id: 2,
    questionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
    options: [
      { text: 'consectetur  elit' },
      { text: 'adipiscing' },
      { text: 'elit' },
    ],
  },
  {
    id: 3,
    questionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
    options: [
      { text: 'elit consectetur' },
      { text: 'elit' },
      { text: 'adipiscing' },
    ],
  },
  {
    id: 4,
    questionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
    options: [
      { text: 'consectetur  elit' },
      { text: 'adipiscing' },
      { text: 'elit' },
    ],
  },
];
