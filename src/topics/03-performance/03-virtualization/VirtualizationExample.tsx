import { useState } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

// Simple virtual list implementation
function VirtualList({ items }: { items: string[] }) {
    const [scrollTop, setScrollTop] = useState(0);
    const itemHeight = 40;
    const containerHeight = 400;
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(startIndex + visibleCount + 1, items.length);
    const visibleItems = items.slice(startIndex, endIndex);

    return (
        <div
            className="relative overflow-auto bg-white rounded-lg border-2"
            style={{ height: containerHeight }}
            onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
        >
            <div style={{ height: items.length * itemHeight }}>
                <div style={{ transform: `translateY(${startIndex * itemHeight}px)` }}>
                    {visibleItems.map((item, i) => (
                        <div
                            key={startIndex + i}
                            className="px-4 py-2 border-b hover:bg-gray-50"
                            style={{ height: itemHeight }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const VirtualizationExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-teal-600 to-cyan-700 p-8 rounded-2xl shadow-2xl text-white">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold"><i className="fa-solid fa-list mr-2"></i>Virtualization</h2>
                    <button onClick={() => setShowConcepts(!showConcepts)} className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-sm font-bold">
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Concepts
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-6 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-teal-600"></i>
                                Virtualization Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/03-performance/03-virtualization/VirtualizationConcepts.md" />
                    </div>
                )}

                <div className="space-y-4">
                    <p className="text-lg">Rendering <strong>10,000 items</strong> efficiently!</p>
                    <VirtualList items={items} />
                    <p className="text-sm opacity-90">Only visible items are rendered. Scroll to see smooth performance! 🚀</p>
                </div>
            </div>
        </div>
    );
};

export default VirtualizationExample;
