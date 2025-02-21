"use client";

import React from "react";
import DataList from "./DataList";
import type { DataItem } from "@/app/types/data";

interface HomePageProps {
  data: DataItem[];
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div className="px-6 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Danh sách Prompt và Completion
      </h1>
      <DataList data={data} />
    </div>
  );
};

export default HomePage;
