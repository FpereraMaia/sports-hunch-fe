import Service from "./Service";

export default class StandingsService extends Service {
  getCurrent() {
    return this.get(
      `/v1/championship/standings/current/`,
    );
  }
}
