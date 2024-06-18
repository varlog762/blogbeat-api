import { Controller, Get } from '@nestjs/common';

import { TagService } from '@app/tag/tag.service';

@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  getAll(): string[] {
    return this.tagService.findAll();
  }
}
