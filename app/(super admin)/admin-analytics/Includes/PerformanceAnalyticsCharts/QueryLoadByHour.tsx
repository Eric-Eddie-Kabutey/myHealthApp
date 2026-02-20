'use client';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';

const data = [
    { time: '00:00', value: 56 },
    { time: '04:00', value: 65 },
    { time: '08:00', value: 76 },
    { time: '12:00', value: 78 },
    { time: '16:00', value: 70 },
    { time: '20:00', value: 37 },
];

export default function QueryLoadByHour({ className }: { className?: string }) {
    return (
        <div className={`w-full h-full ${className}`}>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#588A78" barSize={50} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
