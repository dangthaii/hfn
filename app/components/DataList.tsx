import React from "react";
import { List, Card } from "antd";
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
          <Card className="mb-4">
            <div className="space-y-2">
              <div>
                <h3 className="font-bold text-lg mb-1">Prompt:</h3>
                <p>{item.prompt}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Completion:</h3>
                <p>{item.completion}</p>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default DataList;
