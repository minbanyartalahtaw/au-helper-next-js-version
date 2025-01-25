"use server";
import getClient from "../libs/mongodb";

interface Prop {
  username: string;
  password: string;
}

export default async function checkUser({ username, password }: Prop) {
  const client = await getClient();
  const userCollection = client.collection("rootUser");
  const isUserExit = await userCollection.findOne({
    username: username,
    password: password,
  });
  if (isUserExit) return true;
  return false;
}
