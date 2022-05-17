import Service from "./Service";

export default class UsersService extends Service {
  getAll() {
    return this.get(
      `/api/users/`,
    );
  }

  getById(userId: number) {
    return this.get(
      `/api/users/${userId}/`,
    );
  }
}
