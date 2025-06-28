import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <div
        style="height: 100%; display: flex; flex: 1 1; align-items: center; justify-content: center;"
      >
      <h1>Hola mundo</h1>
      </div>
    `
  }
}
