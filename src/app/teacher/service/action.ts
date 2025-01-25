"use server";
import getClient from "@/app/libs/mongodb";

export default async function getServices() {
  const client = await getClient();
  const serviceCollection = client.collection("services");
  const data = await serviceCollection.find().toArray();
  const finalData = JSON.parse(JSON.stringify(data));
  return finalData;
}
