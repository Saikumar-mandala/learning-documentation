import { useState, useEffect, useMemo } from 'react';

const ReferentialEquality = () => {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    // ❌ New object created on every render
    // const themeStyles = {
    //   backgroundColor: dark ? '#333' : '#FFF',
    //   color: dark ? '#FFF' : '#333',
    // };

    // ✅ Stable object reference (only changes when 'dark' changes)
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? '#333' : '#FFF',
            color: dark ? '#FFF' : '#333',
        };
    }, [dark]);

    useEffect(() => {
        console.log('Theme Object Changed!');
    }, [themeStyles]); // Depends on the object reference

    return (
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">2️⃣ Referential Equality</h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={() => setCount(c => c + 1)}
                        className="bg-white text-purple-600 font-bold py-2 px-4 rounded shadow hover:bg-gray-100"
                    >
                        Increment Count: {count}
                    </button>

                    <button
                        onClick={() => setDark(prev => !prev)}
                        className="bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded shadow"
                    >
                        Toggle Theme
                    </button>
                </div>

                <div style={themeStyles} className="p-8 rounded-lg shadow-inner text-center transition-colors duration-300">
                    <p className="font-bold text-xl">
                        Check the console!
                    </p>
                    <p className="text-sm opacity-80 mt-2">
                        "Theme Object Changed!" should ONLY log when you toggle the theme, NOT when you increment the count.
                    </p>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 If we didn't use <code>useMemo</code> for <code>themeStyles</code>, the <code>useEffect</code> would run on <strong>every render</strong> (e.g., when clicking Increment), because <code>{'{...}'} !== {'{...}'}</code> in JavaScript.
                </p>
            </div>
        </div>
    );
};

export default ReferentialEquality;
