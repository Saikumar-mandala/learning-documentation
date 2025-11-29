import { useState, useTransition } from 'react';
import SlowList from './examples/SlowList';
import MarkdownViewer from '../../components/MarkdownViewer';

// Generate dummy data
const generateItems = (count: number) =>
    Array.from({ length: count }, (_, i) => `Item ${i + 1} - ${Math.random().toString(36).substring(7)}`);

const allItems = generateItems(200);

const UseTransitionExamples = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(allItems);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // ✅ URGENT: Update input immediately
        setQuery(value);

        // ⏳ NON-URGENT: Filter list (can be interrupted)
        startTransition(() => {
            const filtered = allItems.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredItems(filtered);
        });
    };

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <div className="bg-gradient-to-br from-orange-600 to-red-700 p-8 rounded-2xl shadow-2xl text-white">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <i className="fa-solid fa-hourglass-half"></i> useTransition
                    </h2>
                    <button
                        onClick={() => setShowConcepts(!showConcepts)}
                        className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-200 shadow-lg border border-white border-opacity-30 text-sm"
                    >
                        {showConcepts ? '🙈 Hide Concepts' : '📖 Show Concepts'}
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-8 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-orange-600"></i>
                                useTransition Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/hooks/useTransition/UseTransitionConcepts.md" />
                    </div>
                )}

                <div className="bg-white text-gray-800 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <i className="fa-solid fa-magnifying-glass text-orange-600"></i>
                        Search 200 Items (Slow Render)
                    </h3>

                    <div className="mb-6">
                        <input
                            type="text"
                            value={query}
                            onChange={handleChange}
                            placeholder="Type to filter..."
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                        />

                        <div className="mt-3 flex items-center gap-4">
                            <span className="text-sm text-gray-600">
                                Showing {filteredItems.length} of {allItems.length} items
                            </span>
                            {isPending && (
                                <span className="text-sm text-orange-600 font-bold flex items-center gap-2">
                                    <i className="fa-solid fa-spinner fa-spin"></i>
                                    Updating...
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mb-4">
                        <p className="text-sm text-blue-800">
                            <i className="fa-solid fa-info-circle mr-2"></i>
                            <strong>Try it:</strong> Type quickly in the input. Notice how it stays responsive even though rendering 200 items is slow!
                        </p>
                    </div>

                    <SlowList items={filteredItems} />
                </div>

            </div>
        </div>
    );
};

export default UseTransitionExamples;
