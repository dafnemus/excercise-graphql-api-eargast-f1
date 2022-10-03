import { checkRound, checkYear, paginationOptions } from '../lib/utils';
import { F1 } from './data-source';

export class DriversData extends F1 {
  constructor() {
    super();
  }

  async getDrivers(pageElement: number = -1, page: number = 1) {
    if (pageElement === -1) {
      return await this.get('drivers.json?limit=1000', {
        cacheOptions: { ttl: 60 },
      });
    }

    return await this.get(
      `drivers.json?${paginationOptions(pageElement, page)}`,
      {
        cacheOptions: { ttl: 60 },
      }
    );
  }
  async getDriversByYear(year: string) {
    year = checkYear(year);

    return await this.get(`${year}/drivers.json`, {
      cacheOptions: { ttl: 60 },
    });
  }
  async getDriversByYearAndRound(year: string, round: number) {
    year = checkYear(year);
    round = checkRound(round);

    return await this.get(`${year}/${round}/drivers.json`, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getDriverById(id: string) {
    return await this.get(`drivers/${id}.json?`, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getSeasonsPilotsRanking(year: string) {
    year = checkYear(year);

    return await this.get(`${year}/driverStandings.json`, {
      cacheOptions: { ttl: 60 },
    });
  }
}
