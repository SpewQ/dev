import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // Route -> '/'
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Route -> '/users'
  @Get('users')
  async getUsers(): Promise<any[]> {
    return this.appService.getUsers();
  }
}