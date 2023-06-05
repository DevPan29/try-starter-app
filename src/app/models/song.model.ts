export type SongGenre =
  | 'POP'
  | 'ROCK'
  | 'TRAP'
  | 'JAZZ'
  | 'BLUES'
  | 'DANCE'
  | 'ELECTRONIC'
  | 'INDIE'
  | 'METAL'
  | 'PUNK'
  | 'LATIN';

export const allSongGenres: SongGenre[] = [
  'POP', 'ROCK', 'TRAP', 'JAZZ', 'BLUES', 'DANCE', 'ELECTRONIC', 'INDIE', 'METAL', 'PUNK', 'LATIN'
]

export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  genre: string;
  createdDate: Date;
  lastModifiedDate: Date;
}
