import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return 'Back-End server is up and running @ localhost:3001';
  }
}
