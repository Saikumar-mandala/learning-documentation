import React, { useState, useCallback } from 'react';

// Individual List Item (Memoized)
const ListItem = React.memo(({ item, onRemove }: { item: string, onRemove: (item: string) => void }) => {
    // Visual feedback for re-render
    const renderCount = React.useRef(0);
    renderCount.current++;

    return (
        <li className="flex justify-between items-center bg-white p-3 rounded shadow-sm mb-2 text-gray-800">
            <span>{item}</span>
            <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    Renders: {renderCount.current}
                </span>
                <button
                    onClick={() => onRemove(item)}
                    className="text-red-500 hover:text-red-700 font-bold px-2"
                >
                    ×
                </button>
            </div>
        </li>
    );
});

const MemoizedList = () => {
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
    const [text, setText] = useState('');

    // ❌ BAD: Re-created every time 'text' input changes
    // const handleRemove = (itemToRemove: string) => {
    //   setItems(items.filter(i => i !== itemToRemove));
    // };

    // ✅ GOOD: Memoized. Only changes if 'items' changes (wait, actually we can optimize even more)
    // Better yet, use functional update to remove 'items' dependency!
    const handleRemove = useCallback((itemToRemove: string) => {
        setItems(prevItems => prevItems.filter(i => i !== itemToRemove));
    }, []); // No dependencies! This function is stable forever.

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text) return;
        setItems([...items, text]);
        setText('');
    };

    return (
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-6 rounded-xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">2️⃣ Optimized List</h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                <form onSubmit={handleAdd} className="flex gap-2 mb-6">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Add item..."
                        className="flex-1 px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                    <button
                        type="submit"
                        className="bg-pink-800 hover:bg-pink-900 text-white font-bold py-2 px-6 rounded transition-colors"
                    >
                        Add
                    </button>
                </form>

                <p className="text-sm mb-4 opacity-90">
                    Type in the input. Notice that existing list items <strong>do not re-render</strong> while you type.
                    This is because <code>handleRemove</code> is memoized and stable.
                </p>

                <ul className="max-h-60 overflow-y-auto pr-2">
                    {items.map(item => (
                        <ListItem key={item} item={item} onRemove={handleRemove} />
                    ))}
                </ul>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 We used <code>setItems(prev =&gt; ...)</code> inside <code>useCallback</code> so we didn't need to add <code>items</code> as a dependency. This makes the function truly static!
                </p>
            </div>
        </div>
    );
};

export default MemoizedList;
