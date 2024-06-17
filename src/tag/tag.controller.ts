import { Controller, Get } from '@nestjs/common';

@Controller('tags')
export class TagController {
  @Get()
  getAll(): string[] {
    return ['dragons', 'coffee'];
  }
}
