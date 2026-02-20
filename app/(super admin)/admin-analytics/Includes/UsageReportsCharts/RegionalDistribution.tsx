'use client';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'North America', value: 38.5 },
    { name: 'Europe', value: 32.4 },
    { name: 'Asia Pacific', value: 21.5 },
    { name: 'Latin America', value: 5.3 },
    { name: 'Africa', value: 2.3 },
];

const COLORS = ['#6A75FF', '#00CFFF', '#5AC58E', '#FFB347', '#A187F9'];

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}: any) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 20;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill={COLORS[index]}
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            fontSize="12"
        >
            {`${data[index].name} ${data[index].value}%`}
        </text>
    );
};

export default function RegionalDistribution({ className }: { className?: string }) {
    return (
        <div className={`w-full h-full ${className}`}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={40}
                        fill="#8884d8"
                        dataKey="value"
                        labelLine={true}
                        label={renderCustomizedLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value: any) => `${value}%`} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
