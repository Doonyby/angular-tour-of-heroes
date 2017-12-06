import { Hero } from "./hero";

export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', power: 'Really Smart', alterEgo: null },
  { id: 12, name: 'Narco', power: 'Really Smart', alterEgo: null },
  { id: 13, name: 'Bombasto', power: 'Really Smart', alterEgo: null, addresses: [{street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'}, {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},] },
  { id: 14, name: 'Celeritas', power: 'Really Smart', alterEgo: null, addresses: [{street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},] },
  { id: 15, name: 'Magneta', power: 'Really Smart', alterEgo: null },
  { id: 16, name: 'RubberMan', power: 'Really Smart', alterEgo: null },
  { id: 17, name: 'Dynama', power: 'Really Smart', alterEgo: null },
  { id: 18, name: 'Dr IQ', power: 'Really Smart', alterEgo: null },
  { id: 19, name: 'Magma', power: 'Really Smart', alterEgo: null },
  { id: 20, name: 'Tornado', power: 'Really Smart', alterEgo: null }
];

export const states = ['CA', 'MD', 'OH', 'VA']