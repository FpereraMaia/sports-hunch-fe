import Service from "./Service";

export default class TeamsService extends Service {
  getAll() {
    return this.get(
      `/api/teams/`,
    );
  }
}
