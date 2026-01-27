
export enum AppStep {
  INTRO = 0,
  PSF_2023 = 1,
  BROOKFIELD = 2,
  GIBBS = 3,
  SCHON = 4,
  ROLFE = 5,
  KOLB = 6,
  EXAMPLES = 7,
  AI_LAB = 8,
  RESOURCES = 9
}

export interface ReflectionModel {
  id: AppStep;
  title: string;
  year: string;
  description: string;
  elements: string[];
  tips: string;
}

export interface ReadingItem {
  id: number;
  author: string;
  year: string;
  title: string;
  summary: string;
  url: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: string;
}

export interface CreativeExample {
  role: 'Lecturing' | 'Leadership' | 'Professional Services' | 'Technical Services';
  title: string;
  scenario: string;
  reflection: string;
}

export interface PSFDimension {
  code: string;
  title: string;
  description: string;
}
