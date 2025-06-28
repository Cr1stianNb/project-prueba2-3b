import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/end')
  getEnv(): string {
    return this.appService.getEnd();
  }

  @Get('/author')
  getAuthor(): string {
    return this.appService.getAuthor();
  }
}
