import { useState, useDeferredValue, useMemo } from 'react';
import MarkdownViewer from '../../components/MarkdownViewer';

const UseDeferredValueExamples = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const [input, setInput] = useState('');
    const deferredInput = useDeferredValue(input);

    const list = useMemo(() => {
        // Generate large list based on input
        const items = [];
        for (let i = 0; i < 10000; i++) {
            if (deferredInput && i.toString().includes(deferredInput)) {
                items.push(`Result ${i}`);
            } else if (!deferredInput) {
                items.push(`Item ${i}`);
            }
        }
        return items.slice(0, 100); // Show first 100
    }, [deferredInput]);

    const isStale = input !== deferredInput;

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-green-600 to-teal-700 p-8 rounded-2xl shadow-2xl text-white">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <i className="fa-solid fa-clock"></i> useDeferredValue
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
                                <i className="fa-solid fa-book-open text-green-600"></i>
                                useDeferredValue Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/hooks/useDeferredValue/UseDeferredValueConcepts.md" />
                    </div>
                )}

                <div className="bg-white text-gray-800 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Search 10,000 Items</h3>

                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type to filter..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg mb-4"
                    />

                    <div className="mb-4 flex items-center gap-3">
                        <span className="text-sm text-gray-600">Showing {list.length} items</span>
                        {isStale && (
                            <span className="text-sm text-orange-600 font-bold">
                                <i className="fa-solid fa-spinner fa-spin mr-1"></i>
                                Updating...
                            </span>
                        )}
                    </div>

                    <div
                        className={`max-h-96 overflow-y-auto transition-opacity duration-200 ${isStale ? 'opacity-50' : 'opacity-100'}`}
                    >
                        <div className="grid grid-cols-2 gap-2">
                            {list.map((item, i) => (
                                <div key={i} className="p-2 bg-gray-100 rounded text-sm">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UseDeferredValueExamples;
