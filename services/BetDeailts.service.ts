import Service from "./Service";

export default class BetDetailsService extends Service {
  getBetStandingsByUser(userId: number) {
    return this.get(
      `/api/bets/details/user/${userId}`
    );
  }
}
