import { useState, useEffect } from 'react';

const DependencyDemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [effectLog, setEffectLog] = useState<string[]>([]);

    const addLog = (message: string) => {
        setEffectLog(prev => [message, ...prev].slice(0, 5));
    };

    // Effect 1: No Dependency Array
    useEffect(() => {
        addLog('⚡ Effect 1 ran (No Deps - Every Render)');
    });

    // Effect 2: Empty Dependency Array
    useEffect(() => {
        addLog('🟢 Effect 2 ran (Empty Deps - Mount Only)');
    }, []);

    // Effect 3: Count Dependency
    useEffect(() => {
        if (count > 0) { // Skip initial mount log for clarity
            addLog(`🔢 Effect 3 ran (Count changed to ${count})`);
        }
    }, [count]);

    // Effect 4: Text Dependency
    useEffect(() => {
        if (text) { // Skip initial
            addLog(`📝 Effect 4 ran (Text changed to "${text}")`);
        }
    }, [text]);

    return (
        <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
                4️⃣ Dependency Array Visualizer
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Controls */}
                <div className="space-y-6">
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                        <p className="text-white mb-2 font-bold">Change Count:</p>
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-blue-400">{count}</span>
                            <button
                                onClick={() => setCount(c => c + 1)}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
                            >
                                Increment
                            </button>
                        </div>
                    </div>

                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                        <p className="text-white mb-2 font-bold">Change Text:</p>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Type here..."
                            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:border-blue-500 outline-none"
                        />
                    </div>
                </div>

                {/* Logs */}
                <div className="bg-black bg-opacity-50 p-4 rounded-lg h-64 overflow-hidden flex flex-col">
                    <div className="flex justify-between items-center mb-2 border-b border-gray-700 pb-2">
                        <span className="text-gray-400 font-mono text-sm">Effect Logs (Last 5)</span>
                        <button
                            onClick={() => setEffectLog([])}
                            className="text-xs text-red-400 hover:text-red-300"
                        >
                            Clear
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-2">
                        {effectLog.map((log, index) => (
                            <div key={index} className="font-mono text-xs text-green-400 border-l-2 border-green-600 pl-2">
                                {log}
                            </div>
                        ))}
                        {effectLog.length === 0 && (
                            <p className="text-gray-600 text-center mt-10 italic">Waiting for effects...</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-white bg-opacity-10 rounded-lg p-4 text-sm text-white">
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <code className="text-yellow-300">useEffect(() =&gt; ...)</code>
                        <p className="text-gray-400 text-xs">Runs after EVERY render</p>
                    </div>
                    <div>
                        <code className="text-yellow-300">useEffect(..., [])</code>
                        <p className="text-gray-400 text-xs">Runs ONLY on Mount</p>
                    </div>
                    <div>
                        <code className="text-yellow-300">useEffect(..., [count])</code>
                        <p className="text-gray-400 text-xs">Runs when 'count' changes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DependencyDemo;
