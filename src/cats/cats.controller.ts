import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {

  @Post()
  create(@Body() createCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  async findAll(): Promise<any[]> {
    return []
  }

  @Get(':id')
  findOne(@Param() params) {
    console.log(params.id);
    return `This action returns a #${params.id}`;
  }
}
