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
      `/v1/bet/ranking/current/`,
    );
  }

  getRankingByUser(userId: number) {
    return this.get(
      `/api/bets/details/user/ranking/${userId}/`,
    );
  }


}
