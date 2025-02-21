import React, { useState } from "react";
import { List, Collapse, Pagination, Input } from "antd";
import type { DataItem } from "@/app/types/data";
import { SearchOutlined } from "@ant-design/icons";

interface DataListProps {
  data: DataItem[];
}

const DataList: React.FC<DataListProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const pageSize = 10;

  // Filter data based on search text
  const filteredData = data.filter((item) =>
    item.prompt.toLowerCase().includes(searchText.toLowerCase())
  );

  const startIndex = (currentPage - 1) * pageSize;
  const currentData = filteredData.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <Input
          placeholder="Tìm kiếm câu hỏi..."
          prefix={<SearchOutlined className="text-gray-400" />}
          onChange={(e) => handleSearch(e.target.value)}
          className="max-w-md mx-auto"
          size="large"
          allowClear
        />
      </div>
      <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
        dataSource={currentData}
        renderItem={(item) => (
          <List.Item>
            <Collapse
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden [&_.ant-collapse-header]:px-4 [&_.ant-collapse-header]:py-3"
              items={[
                {
                  key: "1",
                  label: (
                    <div className="font-medium text-lg flex items-center">
                      {item.prompt}
                    </div>
                  ),
                  children: (
                    <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-800/50">
                      <div className="space-y-2">
                        <div>
                          <h3 className="font-semibold text-sm text-zinc-500 dark:text-zinc-400">
                            Câu hỏi:
                          </h3>
                          <p className="mt-1">{item.prompt}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-zinc-500 dark:text-zinc-400">
                            Câu trả lời:
                          </h3>
                          <p className="mt-1">{item.completion}</p>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
              expandIconPosition="end"
            />
          </List.Item>
        )}
      />
      <div className="flex justify-center">
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          total={filteredData.length}
          pageSize={pageSize}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default DataList;
