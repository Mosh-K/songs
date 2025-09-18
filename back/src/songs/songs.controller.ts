import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Song } from 'src/songs/entities/song.entity';
import { SongsService } from './songs.service';

@Controller('/songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all songs' })
  @ApiResponse({ status: 200, description: 'List of songs', type: [Song] })
  async getAllSongs() {
    return await this.songsService.getAllSongs();
  }

  @Post()
  @ApiOperation({ summary: 'Add multiple songs' })
  @ApiBody({ description: 'Array of songs to add', type: [Song] })
  @ApiResponse({
    status: 201,
    description: 'The songs have been successfully added.',
  })
  async addSongs(@Body() songs: Song[]) {
    return await this.songsService.addSongs(songs);
  }
}
