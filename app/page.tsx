import HomePage from "./components/HomePage";
import { GET } from "./api/data/route";

async function getData() {
  const response = await GET();
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data = await getData();
  return <HomePage data={data} />;
}
