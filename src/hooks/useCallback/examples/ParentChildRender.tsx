import React, { useState, useCallback } from 'react';

// A Child component that is expensive to render (simulated)
// React.memo makes it ONLY re-render if props change
const ExpensiveChild = React.memo(({ onAction, label }: { onAction: () => void, label: string }) => {
    console.log(`Rendering ${label}`);

    // Visual feedback for re-render
    const [flash, setFlash] = useState(false);

    React.useEffect(() => {
        setFlash(true);
        const timer = setTimeout(() => setFlash(false), 500);
        return () => clearTimeout(timer);
    }, [onAction]); // Flash when onAction prop changes (which means a re-render occurred)

    return (
        <div className={`p-4 border-2 rounded-lg transition-colors duration-300 ${flash ? 'bg-red-200 border-red-500' : 'bg-white border-gray-200'
            }`}>
            <p className="font-bold text-gray-800 mb-2">{label}</p>
            <p className="text-xs text-gray-500 mb-3">
                I flash red when I re-render!
            </p>
            <button
                onClick={onAction}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded hover:bg-indigo-200 text-sm font-semibold"
            >
                Click Me
            </button>
        </div>
    );
});

const ParentChildRender = () => {
    const [count, setCount] = useState(0);

    // ❌ BAD: Function is re-created on every render
    const handleBadClick = () => {
        console.log('Bad Click');
    };

    // ✅ GOOD: Function is memoized and only created ONCE
    const handleGoodClick = useCallback(() => {
        console.log('Good Click');
    }, []); // Empty dependency array = stable reference forever

    return (
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">1️⃣ The Re-render Problem</h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-xl font-bold">Parent State: {count}</p>
                        <p className="text-sm opacity-80">Clicking this button forces Parent to re-render</p>
                    </div>
                    <button
                        onClick={() => setCount(c => c + 1)}
                        className="bg-white text-indigo-600 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform active:scale-95"
                    >
                        Increment Parent
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Case 1: Without useCallback */}
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                        <h4 className="font-bold text-red-300 mb-2">❌ Without useCallback</h4>
                        <p className="text-xs mb-4 h-10">
                            Passes a new function reference every time Parent renders. Child re-renders unnecessarily.
                        </p>
                        <ExpensiveChild onAction={handleBadClick} label="Bad Child" />
                    </div>

                    {/* Case 2: With useCallback */}
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                        <h4 className="font-bold text-green-300 mb-2">✅ With useCallback</h4>
                        <p className="text-xs mb-4 h-10">
                            Passes the SAME function reference. Child skips re-render thanks to React.memo.
                        </p>
                        <ExpensiveChild onAction={handleGoodClick} label="Good Child" />
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 Try clicking "Increment Parent". Notice how "Bad Child" flashes (re-renders) while "Good Child" stays calm.
                </p>
            </div>
        </div>
    );
};

export default ParentChildRender;
