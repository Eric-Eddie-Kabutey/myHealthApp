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
    ReferenceLine,
} from "recharts";

const data = [
    { month: "Jan", rate: 55 },
    { month: "Feb", rate: 65 },
    { month: "Mar", rate: 75 },
    { month: "Apr", rate: 78 },
    { month: "May", rate: 70 },
    { month: "Jun", rate: 35 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 rounded shadow-md text-sm border border-gray-200">
                <p className="font-medium">{label}</p>
                <p className="text-[#3F51B5]">Rate: {payload[0].value}</p>
            </div>
        );
    }
    return null;
};

// Custom Dot Renderer
const CustomDot = (props: any) => {
    const { cx, cy } = props;
    return (
        <>
            {/* Outer ring */}
            <circle cx={cx} cy={cy} r={10} fill="#3f7cb5" opacity={0.1} />
            {/* Inner dot */}
            <circle cx={cx} cy={cy} r={5} fill="#3f7cb5" />
        </>
    );
};

export default function SubscriptionConversions() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                    formatter={() => (
                        <span style={{ color: "#3F51B5", fontWeight: 500 }}>Rate</span>
                    )}
                />
                <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="#3f7cb5"
                    strokeWidth={1.5}
                    dot={<CustomDot />}
                    activeDot={{ r: 6 }}
                />
                {/* <ReferenceLine x="May" stroke="#0288D1" strokeWidth={3} /> */}
            </LineChart>
        </ResponsiveContainer>
    );
}
