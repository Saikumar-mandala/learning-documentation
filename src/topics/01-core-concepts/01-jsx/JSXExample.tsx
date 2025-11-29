import { useState } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

const JSXExample = () => {
    const [name, setName] = useState('React Learner');
    const [showSecret, setShowSecret] = useState(false);
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);

    const [showConcepts, setShowConcepts] = useState(false);

    const addItem = () => {
        const fruits = ['Date', 'Elderberry', 'Fig', 'Grape'];
        const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
        setItems([...items, randomFruit]);
    };

    return (
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-xl shadow-2xl text-white">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">1️⃣ JSX in Action</h3>
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
                            <i className="fa-solid fa-book-open text-blue-600"></i>
                            JSX Concepts
                        </h4>
                        <button
                            onClick={() => setShowConcepts(false)}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <MarkdownViewer filePath="/src/topics/01-core-concepts/01-jsx/JSXConcepts.md" />
                </div>
            )}

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 mb-6 space-y-6">

                {/* Expression Embedding */}
                <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">1. Expressions</h4>
                    <p className="mb-2">Type your name to see it update live:</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <p className="mt-4 text-xl">
                        Hello, <span className="font-bold text-yellow-300">{name}</span>!
                    </p>
                    <p className="text-sm opacity-70 mt-1">
                        (Uppercase: {name.toUpperCase()})
                    </p>
                </div>

                {/* Conditional Rendering */}
                <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">2. Conditional Rendering</h4>
                    <button
                        onClick={() => setShowSecret(!showSecret)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow transition-colors mb-2"
                    >
                        {showSecret ? 'Hide Secret' : 'Show Secret'}
                    </button>

                    {showSecret ? (
                        <div className="p-3 bg-green-500 bg-opacity-50 rounded border border-green-400 animate-pulse">
                            🎉 You found the secret message!
                        </div>
                    ) : (
                        <div className="p-3 bg-gray-600 bg-opacity-50 rounded border border-gray-500">
                            🔒 Secret is hidden
                        </div>
                    )}
                </div>

                {/* List Rendering */}
                <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">3. Lists & Fragments</h4>
                    <button
                        onClick={addItem}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-3 rounded text-sm mb-3"
                    >
                        + Add Fruit
                    </button>
                    <ul className="list-disc list-inside space-y-1">
                        {items.map((item, index) => (
                            // Using a Fragment implicitly with key on li, or explicitly if needed
                            <li key={index} className="hover:text-yellow-300 transition-colors cursor-default">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 <strong>JSX</strong> lets us combine logic and markup. We used <code>{'{name}'}</code> for expressions, ternary operators for conditionals, and <code>.map()</code> for lists.
                </p>
            </div>
        </div>
    );
};

export default JSXExample;
