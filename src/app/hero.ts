import { Address } from './address';

export class Hero {
  
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public addresses?: Address[],
    public alterEgo?: string,
  ) { }
  
}
