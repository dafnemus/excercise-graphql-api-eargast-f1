import { F1 } from './data-source';

export class RacesData extends F1 {
  constructor() {
    super();
  }

  // async getRaces() {
  //   return await this.get('reaces.json?limit=80', {
  //     cacheOptions: { ttl: 60 },
  //   });
  // }
}
