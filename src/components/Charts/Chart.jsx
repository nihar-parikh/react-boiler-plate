import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const Chart = () => {
  const data = [
    { id: 1, value: 20, label: "zxc" },
    { id: 1, value: 40, label: "fdcx" },
    { id: 1, value: 40, label: "Sdf" },
  ];

  return (
    <div>
      <div className="mb-6 fontFamily">charts</div>
      <PieChart
        series={[
          {
            data: data,
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default Chart;
