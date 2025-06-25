import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";


export const Section = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center mt-5">
        Sales Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 overflow-auto">
        {/* Bar Charts */}
        {[1, 2, 3].map((_, index) => (
          <BarChart
            key={index}
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
            ]}
            height={300}
            xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"] }]}
          />
        ))}

        {/* Pie Charts */}
        {[1, 2, 3].map((_, index) => (
          <PieChart
            key={index}
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Series A" },
                  { id: 1, value: 15, label: "Series B" },
                  { id: 2, value: 20, label: "Series C" },
                ],
              },
            ]}
            width={300}
            height={300}
          />
        ))}

        
      </div>
    </>
  );
};
