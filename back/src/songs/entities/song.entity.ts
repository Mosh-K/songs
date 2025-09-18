import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'songs' })
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  @ApiProperty({
    example: 'Bohemian Rhapsody',
    description: 'The name of the song',
  })
  name: string;

  @Column({ name: 'band' })
  @ApiProperty({ example: 'Queen', description: 'The band of the song' })
  band: string;

  @Column({ name: 'year' })
  @ApiProperty({
    example: '1975',
    description: 'The year the song was released',
  })
  year: string;
}
