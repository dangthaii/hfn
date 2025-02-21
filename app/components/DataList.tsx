import React from "react";
import { List, Collapse } from "antd";
import type { DataItem } from "@/app/types/data";

interface DataListProps {
  data: DataItem[];
}

const DataList: React.FC<DataListProps> = ({ data }) => {
  return (
    <List
      grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
      dataSource={data}
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
  );
};

export default DataList;
