import HomePage from "./components/HomePage";

async function getData() {
  const res = await fetch("http://localhost:3000/api/data", {
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
