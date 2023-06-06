export type BeerStyle =
  | 'ALE'
  | 'GOSE'
  | 'IPA'
  | 'LAGER'
  | 'PALE_ALE'
  | 'PILSNER'
  | 'PORTER'
  | 'SAISON'
  | 'STOUT'
  | 'HEAT'
  | 'WHEAT';

export const allBeerTypes: BeerStyle[] = [
  'ALE',
  'GOSE',
  'IPA',
  'LAGER',
  'PALE_ALE',
  'PILSNER',
  'PORTER',
  'SAISON',
  'STOUT',
  'HEAT',
  'WHEAT',
];

export interface Beer {
  id: number;
  beerName: string;
  beerStyle: BeerStyle;
  upc: string;
  price: number;
  createdDate: Date;
  lastModifiedDate: Date;
}
/*
export interface BeerForm {
  beerName: FormControl<string | undefined | null>;
  beerStyle: FormControl<BeerStyle | undefined | null>;
  upc: FormControl<string | undefined | null>;
  price: FormControl<number | undefined | null>;
}
 */