import Service from "./Service";

export default class BetDetailsService extends Service {
  getBetStandingsByUser(userId: number) {
    return this.get(
      `/v1/bet/details/user/${userId}`
    );
  }
}
