import ReactECharts from "echarts-for-react";

function HistoricalGraph(props: { data?: IHistorical[] | null }) {
  const dates = props.data?.map((item) => item.date);
  const prices = props.data?.map((item) => item.price);
  const option = {
    xAxis: {
      type: "Dates",
      boundaryGap: false,
      data: dates,
    },
    yAxis: {
      type: "Prices",
    },
    series: [
      {
        data: prices,
        type: "line",
        areaStyle: {},
      },
    ],
  };

  return (
    <div>
      <h1 className=" text-2xl font-semibold leading-none tracking-tight my-2">
        NIFTY 50
      </h1>
      <ReactECharts option={option} />
    </div>
  );
}

export default HistoricalGraph;
