import Service from "./Service";

export default class StandingsService extends Service {
  getCurrent() {
    return this.get(
      `/api/standings/current/`,
    );
  }
}
