import { F1 } from './data-source';

export class DriversData extends F1 {
  constructor() {
    super();
  }

  async getDrivers(pageElement: number = -1, page: number = 1) {
    const offset = (page - 1) * pageElement;
    const limit = pageElement;
    const filter = `limit=${limit}&offset=${offset}`;

    if (limit === -1) {
      return await this.get('drivers.json?limit=1000', {
        cacheOptions: { ttl: 60 },
      });
    }

    return await this.get(`drivers.json?${filter}`, {
      cacheOptions: { ttl: 60 },
    });
  }
}
