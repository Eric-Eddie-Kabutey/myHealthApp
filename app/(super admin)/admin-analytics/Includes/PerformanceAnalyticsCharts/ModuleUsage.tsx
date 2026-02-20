'use client';

type FeatureProgress = {
    name: string;
    value: number;
};

const data: FeatureProgress[] = [
    { name: 'Authentication', value: 95 },
    { name: 'Payment Processing', value: 87 },
    { name: 'Data Analytics', value: 78 },
    { name: 'Notifications', value: 92 },
    { name: 'File Storage', value: 65 },
    { name: 'User Management', value: 89 },
];

export default function ModuleUsage({ className }: { className?: string }) {
    return (
        <div className={`space-y-4 ${className}`}>
            {data.map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                    <div className="w-48 text-right pr-2 text-sm text-gray-800 shrink-0">{item.name}</div>
                    <div className="flex-1 h-3 rounded-full bg-gray-200 overflow-hidden">
                        <div
                            className="h-full bg-emerald-700 transition-all duration-500"
                            style={{ width: `${item.value}%` }}
                        />
                    </div>
                    <div className="w-12 text-sm text-gray-900 text-right">{item.value}%</div>
                </div>
            ))}
        </div>
    );
}
