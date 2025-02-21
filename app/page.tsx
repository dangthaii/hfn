import { headers } from "next/headers";
import HomePage from "./components/HomePage";

async function getData() {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  const res = await fetch(`${protocal}://${host}/api/data`, {
    cache: "no-store", // hoặc { next: { revalidate: 3600 } } để cache
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return <HomePage data={data} />;
}
