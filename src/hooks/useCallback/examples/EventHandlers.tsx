import React, { useState, useCallback } from 'react';

// A custom button that logs when it renders
const OptimizedButton = React.memo(({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => {
    console.log(`Rendering Button: ${children}`);
    return (
        <button
            onClick={onClick}
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded shadow hover:bg-blue-50 transition-colors active:scale-95 transform duration-100"
        >
            {children}
        </button>
    );
});

const EventHandlers = () => {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    // 1. Depends on 'count' - Re-created when count changes
    const handleIncrement = useCallback(() => {
        setCount(c => c + 1);
    }, []); // Stable!

    // 2. Depends on 'dark' - Re-created when dark mode toggles
    const handleToggleTheme = useCallback(() => {
        setDark(d => !d);
    }, []); // Stable!

    // 3. Unstable handler (for comparison)
    const handleReset = () => {
        setCount(0);
        setDark(false);
    };

    return (
        <div className={`p-6 rounded-xl shadow-2xl transition-colors duration-500 ${dark ? 'bg-gray-800' : 'bg-blue-500'
            }`}>
            <h3 className="text-2xl font-bold text-white mb-4">3️⃣ Event Handlers</h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 text-white">
                <div className="text-center mb-8">
                    <span className="text-5xl font-bold block mb-2">{count}</span>
                    <span className="text-sm opacity-80">Current Count</span>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                    <div className="text-center">
                        <OptimizedButton onClick={handleIncrement}>
                            Increment (Stable)
                        </OptimizedButton>
                        <p className="text-xs mt-2 opacity-70">Won't re-render on theme change</p>
                    </div>

                    <div className="text-center">
                        <OptimizedButton onClick={handleToggleTheme}>
                            Toggle Theme (Stable)
                        </OptimizedButton>
                        <p className="text-xs mt-2 opacity-70">Won't re-render on count change</p>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={handleReset}
                            className="bg-red-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-red-600 transition-colors"
                        >
                            Reset (Unstable)
                        </button>
                        <p className="text-xs mt-2 opacity-70">Re-created every render</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4 text-white">
                <p className="text-xs">
                    💡 Open your browser console. Click "Increment". Notice that "Toggle Theme" button <strong>does not log a re-render</strong>.
                    This is because <code>handleToggleTheme</code> is memoized and didn't change.
                </p>
            </div>
        </div>
    );
};

export default EventHandlers;
