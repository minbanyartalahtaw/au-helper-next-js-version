import getClient from "@/app/libs/mongodb";

export default async function getService(id: string) {
  const finalId: number = parseInt(id);
  const client = await getClient();
  const serviceCollection = client.collection("services");
  const data = await serviceCollection.findOne({ id: finalId });
  const finalData = JSON.parse(JSON.stringify(data));
  return finalData;
}
