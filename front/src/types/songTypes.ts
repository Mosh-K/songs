export interface Song {
  name: string;
  band: string;
  year: number;
}

export interface SongResponse extends Song {
  id: number;
}
