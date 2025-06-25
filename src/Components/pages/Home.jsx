import { AlertButton } from "./AlertButton";
import { LineChart } from '@mui/x-charts/LineChart';
// import { dataset } from './basicDataset';
import { dataset1 } from "./basicDataset";
import { dataset2 } from "./basicDataset";
import { dataset3 } from "./basicDataset";

export const Home = () => {
  
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full p-4">
        <h1 className=" text-4xl font-bold mb-4">Home</h1>
        {/* Scatter Chart */}

<div className="flex flex-row items-center justify-center h-full w-full p-4">
  
    <LineChart
      dataset={dataset1}
      xAxis={[{ dataKey: 'x' }]}
      series={[{ dataKey: 'y' }]}
      height={300}
      grid={{ vertical: true, horizontal: true }}
    />
    <LineChart
      dataset={dataset2}
      xAxis={[{ dataKey: 'x' }]}
      series={[{ dataKey: 'y' }]}
      height={300}
      grid={{ vertical: true, horizontal: true }}
    />
    <LineChart
      dataset={dataset3}
      xAxis={[{ dataKey: 'x' }]}
      series={[{ dataKey: 'y' }]}
      height={300}
      grid={{ vertical: true, horizontal: true }}
    />
</div>

                <AlertButton/>
      </div>
    </>
  );
};
