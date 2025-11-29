import { useState } from 'react';

const FunctionalUpdate = () => {
    const [count, setCount] = useState(0);

    // Regular update - may have issues with rapid updates
    const incrementRegular = () => {
        setCount(count + 1);
    };

    // Functional update - safer for dependent updates
    const incrementFunctional = () => {
        setCount(prevCount => prevCount + 1);
    };

    // Multiple rapid updates - shows the difference
    const multipleRegularUpdates = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        // This will only add 1, not 3!
    };

    const multipleFunctionalUpdates = () => {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        // This correctly adds 3!
    };

    return (
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
                6️⃣ Functional Updates
            </h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                <div className="bg-white rounded-lg p-6 mb-4">
                    <p className="text-4xl font-bold text-center text-yellow-600 mb-2">
                        {count}
                    </p>
                    <p className="text-center text-gray-600">Current Count</p>
                </div>

                <div className="space-y-4">
                    {/* Regular Updates */}
                    <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4">
                        <h4 className="font-bold text-red-800 mb-2">❌ Regular Update (Can be problematic)</h4>
                        <div className="flex gap-2">
                            <button
                                onClick={incrementRegular}
                                className="flex-1 px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                            >
                                +1 Regular
                            </button>
                            <button
                                onClick={multipleRegularUpdates}
                                className="flex-1 px-4 py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                            >
                                +3 (Actually +1) 🐛
                            </button>
                        </div>
                        <p className="text-red-800 text-sm mt-2">
                            setCount(count + 1) - Uses stale state in rapid updates
                        </p>
                    </div>

                    {/* Functional Updates */}
                    <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4">
                        <h4 className="font-bold text-green-800 mb-2">✅ Functional Update (Recommended)</h4>
                        <div className="flex gap-2">
                            <button
                                onClick={incrementFunctional}
                                className="flex-1 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                            >
                                +1 Functional
                            </button>
                            <button
                                onClick={multipleFunctionalUpdates}
                                className="flex-1 px-4 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                            >
                                +3 Correctly ✨
                            </button>
                        </div>
                        <p className="text-green-800 text-sm mt-2">
                            setCount(prev =&gt; prev + 1) - Always uses latest state
                        </p>
                    </div>

                    <button
                        onClick={() => setCount(0)}
                        className="w-full px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        🔄 Reset
                    </button>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white font-bold mb-2">🎯 Key Difference:</p>
                <p className="text-white text-sm font-mono mb-2">
                    ❌ setCount(count + 1) // Uses current closure value
                </p>
                <p className="text-white text-sm font-mono mb-2">
                    ✅ setCount(prev =&gt; prev + 1) // Gets latest value
                </p>
                <p className="text-white text-xs mt-2">
                    💡 Always use functional updates when new state depends on previous state!
                </p>
            </div>

            <div className="mt-4 bg-yellow-900 bg-opacity-50 rounded-lg p-4 border-2 border-yellow-300">
                <p className="text-white font-bold mb-2">⚠️ Try This:</p>
                <p className="text-white text-sm">
                    Click "+3 (Actually +1)" and notice it only adds 1. Then click "+3 Correctly" and see it properly add 3!
                </p>
            </div>
        </div>
    );
};

export default FunctionalUpdate;
