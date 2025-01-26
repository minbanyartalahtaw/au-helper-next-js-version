"use server";
import { ServiceType } from "@/app/form/form";
import getClient from "@/app/libs/mongodb";

export default async function getService(id: string) {
  const finalId: number = parseInt(id);
  const client = await getClient();
  const serviceCollection = client.collection("services");
  const data = await serviceCollection.findOne({ id: finalId });
  const finalData = JSON.parse(JSON.stringify(data));
  return finalData;
}

export async function updateService(data: ServiceType) {
  const client = await getClient();
  const serviceCollection = client.collection("services");
  await serviceCollection.updateOne({ id: data.id }, { $set: data });
}
