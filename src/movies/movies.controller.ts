import {
  Controller,
  Param,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchYear: string) {
    return `We are searching for a movie made after: ${searchYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Patch(':id')
  update(@Param('id') movieId: string, @Body() updateData) {
    return {
      id: movieId,
      ...updateData,
    };
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }
}
