import { useState } from 'react';

const SimpleCounter = () => {
    // Basic useState - Initialize counter with 0
    const [count, setCount] = useState(0);

    return (
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
                1️⃣ Simple Counter
            </h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                <p className="text-white text-xl mb-4">
                    Count: <span className="font-bold text-4xl">{count}</span>
                </p>

                <div className="flex gap-3">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        ➕ Increment
                    </button>

                    <button
                        onClick={() => setCount(count - 1)}
                        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        ➖ Decrement
                    </button>

                    <button
                        onClick={() => setCount(0)}
                        className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        🔄 Reset
                    </button>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-sm font-mono">
                    <span className="text-yellow-300">const</span> [count, setCount] = <span className="text-green-300">useState</span>(0);
                </p>
                <p className="text-white text-sm mt-2">
                    ✨ Click buttons to update the state!
                </p>
            </div>
        </div>
    );
};

export default SimpleCounter;
