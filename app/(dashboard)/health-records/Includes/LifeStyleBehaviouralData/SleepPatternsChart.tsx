'use client';

import React, { useMemo } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

type Point = {
    day: string;
    // If you have raw hours, pass hours instead of hoursPct and set maxHours.
    hours?: number;
    hoursPct?: number;        // 0–100
    sleepQualityPct: number;  // 0–100
};

type Props = {
    data: Point[];
    /** If provided, converts `hours` → % via (hours / maxHours) * 100. */
    maxHours?: number;
};

const numberFmt = (v?: number) => (v ?? 0).toFixed(0) + '%';

const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null;
    const hours = payload.find((p: any) => p.dataKey === 'hoursPct');
    const quality = payload.find((p: any) => p.dataKey === 'sleepQualityPct');
    return (
        <div style={{
            background: 'rgba(255,255,255,0.95)',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            padding: '8px 10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            fontSize: 12
        }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{label}</div>
            {hours && (
                <div>
                    <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 9999, background: '#4F46E5', marginRight: 6 }} />
                    Hours Slept: {numberFmt(hours.value)}
                </div>
            )}
            {quality && (
                <div>
                    <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 9999, background: '#10B981', marginRight: 6 }} />
                    Sleep Quality: {numberFmt(quality.value)}
                </div>
            )}
        </div>
    );
};

export default function SleepChart({ data, maxHours }: Props) {
    const normalized = useMemo(() => {
        return data.map(d => {
            const hoursPct = typeof d.hoursPct === 'number'
                ? d.hoursPct
                : (typeof d.hours === 'number' && maxHours)
                    ? Math.max(0, Math.min(100, (d.hours / maxHours) * 100))
                    : undefined;

            return {
                day: d.day,
                hoursPct: hoursPct ?? 0,
                sleepQualityPct: d.sleepQualityPct
            };
        });
    }, [data, maxHours]);

    return (
        <div className="w-full h-[260px] md:h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={normalized} margin={{ top: 16, right: 24, left: 0, bottom: 8 }}>
                    <defs>
                        <linearGradient id="hoursFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.28} />
                            <stop offset="100%" stopColor="#4F46E5" stopOpacity={0.06} />
                        </linearGradient>
                        <linearGradient id="qualityFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10B981" stopOpacity={0.26} />
                            <stop offset="100%" stopColor="#10B981" stopOpacity={0.04} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="day" tickLine={false} axisLine={{ stroke: '#E5E7EB' }} />
                    <YAxis
                        domain={[0, 100]}
                        ticks={[0, 20, 40, 60, 80, 100]}
                        tickFormatter={(v) => `${v}%`}
                        tickLine={false}
                        axisLine={{ stroke: '#E5E7EB' }}
                    />

                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        iconType="circle"
                        wrapperStyle={{ paddingTop: 8 }}
                    />

                    {/* Hours Slept (as %) */}
                    <Area
                        type="monotone"
                        dataKey="hoursPct"
                        name="Hours Slept"
                        stroke="#4F46E5"
                        strokeWidth={2.5}
                        fill="url(#hoursFill)"
                        activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2 }}
                        dot={{ r: 3.5 }}
                    />

                    {/* Sleep Quality (%) */}
                    <Area
                        type="monotone"
                        dataKey="sleepQualityPct"
                        name="Sleep Quality"
                        stroke="#10B981"
                        strokeWidth={2.5}
                        fill="url(#qualityFill)"
                        activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2 }}
                        dot={{ r: 3.5 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
