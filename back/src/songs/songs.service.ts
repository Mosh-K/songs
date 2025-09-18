import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from 'src/songs/entities/song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,
  ) {}
  async getAllSongs() {
    // Sort by band name alphabetically
    const songs = await this.songRepository.find();
    songs.sort((a, b) => a.band.localeCompare(b.band));
    return songs;
  }

  async addSongs(songs: Song[]) {
    // Convert to lowercase before saving
    songs = songs.map((song) => {
      song.name = song.name.toLowerCase();
      song.band = song.band.toLowerCase();
      return song;
    });

    return await this.songRepository.save(songs);
  }
}
