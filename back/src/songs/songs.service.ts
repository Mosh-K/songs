import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from 'src/entities/song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,
  ) {}
  async getAllSongs() {
    return await this.songRepository.find();
  }

  async addSongs(songs: Song[]) {
    return await this.songRepository.save(songs);
  }
}
