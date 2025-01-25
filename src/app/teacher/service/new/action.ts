"use server";
import getClient from "@/app/libs/mongodb";

export default async function addNewService(
  title: string,
  details: string,
  imageLink: string
) {
  const client = await getClient();
  const serviceCollection = client.collection("services");
  const length = await serviceCollection.countDocuments();
  const id = length + 1;
  const serviceData = {
    id: id,
    title: title,
    details: details,
    imageLink: imageLink,
  };
  await serviceCollection.insertOne(serviceData);
}
