import { useState, useEffect, useLayoutEffect } from 'react';

const FlickerDemo = () => {
    const [value, setValue] = useState(0);
    const [isLayoutEffect, setIsLayoutEffect] = useState(false);

    // ❌ useEffect: Causes flicker
    // The browser paints '0', then the effect runs and changes it to random number.
    useEffect(() => {
        if (isLayoutEffect) return;
        if (value === 0) {
            setValue(10 + Math.random() * 200);
        }
    }, [value, isLayoutEffect]);

    // ✅ useLayoutEffect: No flicker
    // React updates DOM to '0', but before paint, this runs and changes it.
    // The browser only paints the final number.
    useLayoutEffect(() => {
        if (!isLayoutEffect) return;
        if (value === 0) {
            setValue(10 + Math.random() * 200);
        }
    }, [value, isLayoutEffect]);

    const handleRefresh = () => {
        setValue(0); // Reset to 0 to trigger the effect
    };

    return (
        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-6 rounded-xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">1️⃣ Flicker Demo</h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 mb-6">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-4 bg-black bg-opacity-30 p-4 rounded-lg">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isLayoutEffect}
                                onChange={(e) => setIsLayoutEffect(e.target.checked)}
                                className="w-5 h-5 text-teal-500 rounded focus:ring-teal-500"
                            />
                            <span className="font-bold">Use useLayoutEffect</span>
                        </label>
                    </div>

                    <div
                        className="text-6xl font-bold bg-white text-teal-800 w-32 h-32 flex items-center justify-center rounded-full shadow-lg transition-all transform active:scale-95 cursor-pointer"
                        onClick={handleRefresh}
                    >
                        {Math.floor(value)}
                    </div>

                    <button
                        onClick={handleRefresh}
                        className="bg-teal-800 hover:bg-teal-900 text-white font-bold py-2 px-8 rounded-full shadow-lg transition-colors"
                    >
                        Click to Refresh
                    </button>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 <strong>Instructions:</strong>
                    <br />
                    1. Uncheck "Use useLayoutEffect". Click Refresh repeatedly. You might see a flash of "0" before the random number appears. That's the flicker.
                    <br />
                    2. Check "Use useLayoutEffect". Click Refresh. No flicker! The number updates instantly.
                </p>
            </div>
        </div>
    );
};

export default FlickerDemo;
