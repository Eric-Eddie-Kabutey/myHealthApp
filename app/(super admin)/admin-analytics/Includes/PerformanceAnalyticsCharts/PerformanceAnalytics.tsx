"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

// Sample Data
const data = [
    { time: "00:00", apiResponse: 110, serverLoad: 118 },
    { time: "04:00", apiResponse: 132, serverLoad: 123 },
    { time: "08:00", apiResponse: 88, serverLoad: 128 },
    { time: "12:00", apiResponse: 90, serverLoad: 129 },
    { time: "16:00", apiResponse: 125, serverLoad: 122 },
    { time: "20:00", apiResponse: 85, serverLoad: 95 },
];

// Custom glowing dot component
const GreenDot = (props: any) => {
    const { cx, cy } = props;
    return (
        <>
            <circle cx={cx} cy={cy} r={10} fill="#4CAF50" opacity={0.1} />
            <circle cx={cx} cy={cy} r={5} fill="#4CAF50" />
        </>
    );
};

const BlueDot = (props: any) => {
    const { cx, cy } = props;
    return (
        <>
            <circle cx={cx} cy={cy} r={10} fill="#3F51B5" opacity={0.1} />
            <circle cx={cx} cy={cy} r={5} fill="#3F51B5" />
        </>
    );
};

export default function PerformanceAnalyticsChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 0, right: 0, left: 10, bottom: 20 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis
                    yAxisId="left"
                    domain={[80, 140]}
                    tick={{ fontSize: 12 }}
                    label={{
                        value: "API Response Time (ms)",
                        angle: -90,
                        position: "insideLeft",
                        offset: 10,
                    }}
                />
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={[20, 70]}
                    tick={{ fontSize: 12 }}
                    label={{
                        value: "Server Load (%)",
                        angle: 90,
                        position: "insideRight",
                        offset: 10,
                    }}
                />
                <Tooltip />
                <Legend />
                <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="apiResponse"
                    stroke="#4CAF50"
                    strokeWidth={2}
                    dot={<GreenDot />}
                />
                <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="serverLoad"
                    stroke="#3F51B5"
                    strokeWidth={2}
                    dot={<BlueDot />}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
