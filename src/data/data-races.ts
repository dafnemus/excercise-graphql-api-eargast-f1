import { F1 } from './data-source';

export class RacesData extends F1 {
  constructor() {
    super();
  }

  async getYear(year: string) {
    const currentYear = new Date().getFullYear();
    const firstYear = 1950;

    if (isNaN(+year) || +year < firstYear || +year > currentYear) {
      year = String(currentYear);
    }

    return await this.get(`${year}.json`, {
      cacheOptions: { ttl: 60 },
    });
  }
}
