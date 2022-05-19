import Service from "./Service";

export default class BetsService extends Service {
  create(bet: any) {
    return this.post(
      `/api/bets/`,
      {
        ...bet
      }
    );
  }

  getCurrentRanking() {
    return this.get(
      `/api/ranking/current/`,
    );
  }
}
