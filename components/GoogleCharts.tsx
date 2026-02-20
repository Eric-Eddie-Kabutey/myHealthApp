// components/GoogleBarChart.tsx

"use client";

import { Chart } from "react-google-charts";

type ChartType =
  | 'AreaChart'
  | 'BarChart'
  | 'Bar'
  | 'BubbleChart'
  | 'Calendar'
  | 'CandlestickChart'
  | 'ColumnChart'
  | 'ComboChart'
  | 'Gantt'
  | 'Gauge'
  | 'GeoChart'
  | 'Histogram'
  | 'LineChart'
  | 'OrgChart'
  | 'PieChart'
  | 'Sankey'
  | 'ScatterChart'
  | 'SteppedAreaChart'
  | 'Table'
  | 'Timeline'
  | 'TreeMap'
  | 'WaterfallChart'
  | 'WordTree'
  | 'AnnotationChart'
  | 'Histogram'
  | 'Map';

export const data = [
  ["", "", ""],
  ["Monday", 1000, 400],
  ["Tuesday", 300, 460],
  ["Wednesday", 660, 1120],
  ["Thursday", 1030, 540],
  ["Friday", 1030, 540],
  ["Saturday", 700, 100],
  ["Sunday", 300, 1000],
];
export const Areadata = [
  ['Month', '2023'],
  ['Jan', 14000],
  ['Feb', 16000],
  ['Mar', 20000],
  ['Apr', 21000],
  ['May', 18000],
  ['Jun', 10000],
];

const Columnchartdata = [
  ['Month', 'Series 1', 'Series 2', 'Series 3'], // These are the labels for your series
  ['Jan', 7000, 11000, 14800], // Approximate values from the image
  ['Feb', 7000, 22000, 17500],
  ['Mar', 24000, 21000, 20800],
  ['Apr', 3000, 4800, 22000],
  ['May', 11500, 10800, 16800],
  ['Jun', 9500, 22500, 23800],
]
const Piedata = [
  ['Category', 'Percentage'],
  ['Consultations', 40], // Green segment - estimated
  ['Subscription', 15],  // Orange segment - estimated
  ['Consultations_Blue', 45], // Blue segment - renamed to differentiate from green one
];

const options = (type: ChartType) => {
  return {
    curveType: type === 'LineChart' ? 'none' : 'function',
    chart: {
      // title: "Company Performance",
      // subtitle: "Sales and Expenses: 2019-2022",
    },
    bars: "vertical", // Required for Material Bar Charts.
    vAxis: {
      format: "decimal",
      minValue: 0,
      gridlines: { count: 5 },
    },
    hAxis: {
      textStyle: { fontSize: 12 },
    },

    colors: ["#34765A", "#4BA254", "#a2dd6a"],

    chartArea: { width: '80%', height: '70%' },
    areaOpacity: 0.2,
    pointSize: 8,

    pieHole: 0.45,
    legend: { position: (type === 'ColumnChart' || type === 'PieChart') ? 'none' : 'bottom' },
  }

};



export default function GoogleCharts({ type, className, data }: { type: ChartType, className?: string, data?: any[] }) {
  return (
    <div className={`w-full h-full mx-auto ${className}`}>
      <Chart
        chartType={type}
        // width="100%"
        height="100%"
        data={data ? data : type === 'AreaChart' ? Areadata : type === 'ColumnChart' ? Columnchartdata : type === 'PieChart' ? Piedata : data}
        options={options(type)}
      />
    </div>
  );
}
