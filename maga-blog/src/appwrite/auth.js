import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    const userAccount = await this.account.createAccount(
      ID.unique(),
      email,
      password,
      name
    );
    if (userAccount) {
      //call another method
      this.login({ email, password });
    } else {
      return userAccount;
    }
  }

  async login({ email, password }) {
    return await this.account.createEmailSession(email, password);
  }

  async getCurrentUser() {
    return await this.account.get();
  }
  async logout() {
    return await this.account.deleteSessions();
  }
}

const authService = new AuthService();

export default authService;
