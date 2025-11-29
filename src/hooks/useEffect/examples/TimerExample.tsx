import { useState, useEffect } from 'react';

const TimerExample = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: number | undefined;

        if (isActive) {
            // Start timer only if active
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        // Cleanup function runs when:
        // 1. Component unmounts
        // 2. Dependencies change (isActive changes)
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive]); // Re-run effect when isActive changes

    return (
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
                3️⃣ Timer & Interval (Cleanup)
            </h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="mb-6">
                    <div className="inline-block p-6 rounded-full border-4 border-white border-opacity-30 bg-white bg-opacity-10 mb-4">
                        <span className="text-5xl font-mono font-bold text-white">
                            {String(Math.floor(seconds / 60)).padStart(2, '0')}:
                            {String(seconds % 60).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setIsActive(!isActive)}
                        className={`px-6 py-3 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg ${isActive
                                ? 'bg-red-600 hover:bg-red-700 text-white'
                                : 'bg-green-600 hover:bg-green-700 text-white'
                            }`}
                    >
                        {isActive ? '⏸️ Pause' : '▶️ Start'}
                    </button>

                    <button
                        onClick={() => {
                            setIsActive(false);
                            setSeconds(0);
                        }}
                        className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                        🔄 Reset
                    </button>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-sm font-mono mb-1">
                    <span className="text-purple-300">useEffect</span>(..., [<span className="text-yellow-300">isActive</span>]);
                </p>
                <p className="text-white text-xs mt-2">
                    💡 Effect re-runs when 'isActive' changes. Cleanup stops the previous interval before creating a new one (or stopping).
                </p>
            </div>
        </div>
    );
};

export default TimerExample;
