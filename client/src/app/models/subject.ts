import { Grade } from './grade';

export interface Subject {
  id: number;
  name: string;
  gradeId: number;
  grade: Grade;
}
