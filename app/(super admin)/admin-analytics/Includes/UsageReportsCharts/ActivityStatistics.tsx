"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", user: 55, sessions: 95 },
    { month: "Feb", user: 60, sessions: 140 },
    { month: "Mar", user: 65, sessions: 90 },
    { month: "Apr", user: 70, sessions: 90 },
    { month: "May", user: 72, sessions: 130 },
    { month: "Jun", user: 45, sessions: 60 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 rounded shadow-md text-sm border border-gray-200">
                <p className="font-medium">{label}</p>
                <p style={{ color: "#4CAF50" }}>Users: {payload[0].value}</p>
                <p style={{ color: "#3F51B5" }}>Sessions: {payload[1].value}</p>
            </div>
        );
    }
    return null;
};

export default function ActivityStatistics({className}:{className?:string}) {
    return (
        <ResponsiveContainer width="100%" height={'100%'} className={`${className}`}>
            <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUser" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3F51B5" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#3F51B5" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                    formatter={(value) => (
                        <span
                            style={{
                                color: value === "user" ? "#3F51B5" : "#4CAF50",
                                fontWeight: 500,
                            }}
                        >
                            {value === "user" ? "User" : "Sessions"}
                        </span>
                    )}
                />
                <Area
                    type="monotone"
                    dataKey="user"
                    stroke="#3F51B5"
                    fillOpacity={1}
                    fill="url(#colorUser)"
                    activeDot={{ r: 6 }}
                    dot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
                />
                <Area
                    type="monotone"
                    dataKey="sessions"
                    stroke="#4CAF50"
                    fillOpacity={1}
                    fill="url(#colorSessions)"
                    activeDot={{ r: 6 }}
                    dot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
