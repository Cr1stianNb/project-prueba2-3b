import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getEnd(): string {
    return 'Bye World!';
  }
  getAuthor(): string {
    return 'Creador por: Cristian Antonio Nettle Berrios';
  }
}
