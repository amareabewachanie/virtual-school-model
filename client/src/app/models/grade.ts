import { Subject } from './subject';

export interface Grade {
  id?: number;
  level?: number;
  subjects?: Subject[];
}
