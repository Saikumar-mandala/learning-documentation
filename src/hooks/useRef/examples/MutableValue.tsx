import { useState, useRef } from 'react';

const MutableValue = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Store the interval ID. It doesn't need to be in state because
    // changing it shouldn't trigger a re-render.
    const intervalRef = useRef<number | null>(null);

    const startTimer = () => {
        if (isRunning) return;

        setIsRunning(true);
        intervalRef.current = window.setInterval(() => {
            setTime(t => t + 10); // Update every 10ms
        }, 10);
    };

    const stopTimer = () => {
        if (!isRunning) return;

        setIsRunning(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    };

    // Format time as mm:ss:ms
    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const centiseconds = Math.floor((ms % 1000) / 10);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">2️⃣ Mutable Values (Stopwatch)</h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-6xl font-mono font-bold mb-8 tracking-wider text-shadow">
                    {formatTime(time)}
                </div>

                <div className="flex justify-center gap-4">
                    {!isRunning ? (
                        <button
                            onClick={startTimer}
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
                        >
                            Start
                        </button>
                    ) : (
                        <button
                            onClick={stopTimer}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
                        >
                            Stop
                        </button>
                    )}

                    <button
                        onClick={resetTimer}
                        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 The <code>intervalRef</code> stores the timer ID. We don't need to re-render when the ID changes, so <code>useRef</code> is perfect.
                    If we used <code>useState</code> for the ID, setting it would cause an extra render.
                </p>
            </div>
        </div>
    );
};

export default MutableValue;
