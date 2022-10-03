import { paginationOptions } from '../lib/utils';
import { F1 } from './data-source';

export class CircuitsData extends F1 {
  constructor() {
    super();
  }

  async getCitcuits(pageElement: number = -1, page: number = 1) {
    if (pageElement === -1) {
      return await this.get('circuits.json?limit=1000', {
        cacheOptions: { ttl: 60 },
      });
    }
    return await this.get(
      `circuits.json?${paginationOptions(pageElement, page)}`,
      {
        cacheOptions: { ttl: 60 },
      }
    );
  }

  async getCircuitById(id: string) {
    return await this.get(`circuits/${id}.json?`, {
      cacheOptions: { ttl: 60 },
    });
  }
}
