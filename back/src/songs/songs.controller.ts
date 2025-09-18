import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from 'src/entities/song.entity';

@Controller('/songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  async getAllSongs() {
    return await this.songsService.getAllSongs();
  }

  @Post()
  async addSongs(@Body() songs: Song[]) {
    return await this.songsService.addSongs(songs);
  }
}
