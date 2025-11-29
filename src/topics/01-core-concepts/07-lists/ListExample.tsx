import { useState } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

const ListExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    const [items, setItems] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ]);

    const addToTop = () => {
        const newId = Math.max(...items.map(i => i.id), 0) + 1;
        setItems([{ id: newId, name: `Item ${newId}` }, ...items]);
    };

    return (
        <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-6 rounded-xl shadow-2xl text-white">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">7️⃣ Lists & Keys</h3>
                <button
                    onClick={() => setShowConcepts(!showConcepts)}
                    className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-200 shadow-lg border border-white border-opacity-30 text-sm"
                >
                    {showConcepts ? '🙈 Hide Concepts' : '📖 Show Concepts'}
                </button>
            </div>

            {showConcepts && (
                <div className="mb-8 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <i className="fa-solid fa-book-open text-yellow-600"></i>
                            🔑 Key Concepts
                        </h4>
                        <button
                            onClick={() => setShowConcepts(false)}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <MarkdownViewer filePath="/src/topics/01-core-concepts/07-lists/ListConcepts.md" />
                </div>
            )}

            <div className="mb-6 text-center">
                <button
                    onClick={addToTop}
                    className="bg-white text-orange-600 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-transform hover:scale-105"
                >
                    + Add Item to Top
                </button>
                <p className="text-sm mt-2 opacity-80">
                    (Notice what happens to the input values when you add a new item)
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

                {/* 1. Bad Practice: Index as Key */}
                <div className="bg-red-900 bg-opacity-40 p-4 rounded-lg border border-red-400 border-opacity-30">
                    <h4 className="font-bold mb-2 text-red-200">❌ Bad: Index as Key</h4>
                    <p className="text-xs mb-4 opacity-70">Type in the inputs, then click "Add Item". The text stays in the same position (wrong)!</p>
                    <ul className="space-y-2">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 bg-white bg-opacity-10 p-2 rounded">
                                <span className="font-mono text-xs opacity-50">{index}</span>
                                <span className="font-bold">{item.name}</span>
                                <input
                                    type="text"
                                    placeholder="Type here..."
                                    className="w-full px-2 py-1 rounded text-gray-800 text-sm"
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. Good Practice: ID as Key */}
                <div className="bg-green-900 bg-opacity-40 p-4 rounded-lg border border-green-400 border-opacity-30">
                    <h4 className="font-bold mb-2 text-green-200">✅ Good: ID as Key</h4>
                    <p className="text-xs mb-4 opacity-70">Type in the inputs, then click "Add Item". The text moves with the item (correct)!</p>
                    <ul className="space-y-2">
                        {items.map((item) => (
                            <li key={item.id} className="flex items-center gap-2 bg-white bg-opacity-10 p-2 rounded">
                                <span className="font-mono text-xs opacity-50">{item.id}</span>
                                <span className="font-bold">{item.name}</span>
                                <input
                                    type="text"
                                    placeholder="Type here..."
                                    className="w-full px-2 py-1 rounded text-gray-800 text-sm"
                                />
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ListExample;
