import { useState, useMemo } from 'react';

// A slow function to simulate heavy computation
const slowFunction = (num: number) => {
    console.log('Calling slow function...');
    // Simulate delay
    const start = performance.now();
    while (performance.now() - start < 500) {
        // Artificial delay of 500ms
    }
    return num * 2;
};

const ExpensiveCalculation = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // ❌ Without useMemo: Runs on EVERY render (even when toggling theme)
    // const doubleNumber = slowFunction(number);

    // ✅ With useMemo: Runs ONLY when 'number' changes
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    const themeStyles = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333',
    };

    return (
        <div className="bg-gradient-to-br from-red-500 to-orange-600 p-6 rounded-xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">1️⃣ Expensive Calculation</h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 mb-6">
                <div className="flex flex-col gap-4">
                    <label className="flex flex-col">
                        <span className="font-bold mb-2">Input Number:</span>
                        <input
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                            className="px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300"
                        />
                    </label>

                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                        <p className="text-lg">
                            Double Number: <span className="font-bold text-yellow-300">{doubleNumber}</span>
                        </p>
                    </div>

                    <button
                        onClick={() => setDark(prev => !prev)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded shadow transition-colors"
                    >
                        Toggle Theme
                    </button>

                    <div style={themeStyles} className="p-4 rounded shadow transition-colors duration-300 text-center">
                        {dark ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 <strong>Try this:</strong> Open the console. Change the number and you will see logs.
                    <br />
                    Now click "Toggle Theme". <strong>Without useMemo</strong>, it would log again and lag. <strong>With useMemo</strong>, it is instant!
                </p>
            </div>
        </div>
    );
};

export default ExpensiveCalculation;
