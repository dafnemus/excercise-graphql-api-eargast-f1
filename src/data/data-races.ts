import { checkYear } from '../lib/utils';
import { F1 } from './data-source';

export class RacesData extends F1 {
  constructor() {
    super();
  }

  async getYear(year: string) {
    year = checkYear(year);
    return await this.get(`${year}.json`, {
      cacheOptions: { ttl: 60 },
    });
  }
}
