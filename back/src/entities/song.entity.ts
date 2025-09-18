import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'songs' })
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'band' })
  band: string;

  @Column({ name: 'year' })
  year: string;
}
