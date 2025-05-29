import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setProject("682a51b1003bd3e4b1fd")
  .setPlatform("dev.ctrp.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
