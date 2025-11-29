import { memo } from 'react';

// Simulate expensive component
const SlowItem = memo(({ text }: { text: string }) => {
    // Artificial slowdown
    const start = performance.now();
    while (performance.now() - start < 1) {
        // Busy wait for 1ms per item
    }

    return (
        <div className="p-3 bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-700">{text}</p>
        </div>
    );
});

interface SlowListProps {
    items: string[];
}

const SlowList = ({ items }: SlowListProps) => {
    return (
        <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
            {items.map((item, index) => (
                <SlowItem key={index} text={item} />
            ))}
        </div>
    );
};

export default SlowList;
