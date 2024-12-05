import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';

@Injectable()
export class AppService {
  @Timeout(0)
  getHello(): string {
    return 'Hello World!';
  }
}
