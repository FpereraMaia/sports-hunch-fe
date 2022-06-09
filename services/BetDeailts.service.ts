import Service from "./Service";

export default class BetDetailsService extends Service {
  getBetStandingsByUser(userId: number) {
    return this.get(
      `/v1/bet/details/user/${userId}`
    );
  }

  getRankingHistoryByUser(userId: number) {
    return this.get(`/v1/bet/ranking/history/${userId}`);
  }

  getRankingHistory() {
    return this.get(`/v1/bet/ranking/history/`);
  }
}
