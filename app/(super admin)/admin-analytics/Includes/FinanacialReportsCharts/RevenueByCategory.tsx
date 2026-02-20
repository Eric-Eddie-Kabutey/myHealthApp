'use client';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Jan', consultations: 40, subscriptions: 70, deliveries: 130 },
    { name: 'Feb', consultations: 40, subscriptions: 80, deliveries: 60 },
    { name: 'Mar', consultations: 90, subscriptions: 90, deliveries: 70 },
    { name: 'Apr', consultations: 15, subscriptions: 20, deliveries: 80 },
    { name: 'May', consultations: 50, subscriptions: 50, deliveries: 50 },
    { name: 'Jun', consultations: 45, subscriptions: 80, deliveries: 70 },
];

export default function RevenueByCategory({ className }: { className?: string }) {
    return (
        <div className={`w-full h-full ${className}`}>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value: any, name: any) => {
                        if (!name) return [value, name];
                        let label = String(name)[0].toUpperCase() + String(name).slice(1);
                        return name === 'consultations' ? [`$ ${value}`, label] : [value, label];
                    }} />
                    <Legend />
                    <Bar dataKey="consultations" stackId="a" fill="#8884ff" />
                    <Bar dataKey="subscriptions" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="deliveries" stackId="a" fill="#f9b449" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}