import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function HistoricalGraph(props: { data?: IHistorical[] | null }) {
  const labels = props.data?.map((item) => item.date.toLocaleString());
  console.log(labels);
  const prices = props.data?.map((item) => item.price);
  const data = {
    labels,
    datasets: [
      {
        label: "Prices",
        data: prices,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="max-h-[50vh] pb-5">
      <h1 className=" text-2xl font-semibold leading-none tracking-tight my-2 ">
        NIFTY 50
      </h1>
      {props.data && <Line data={data} />}
    </div>
  );
}

export default HistoricalGraph;
