import { useState } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

const EventExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (msg: string) => {
        setLogs(prev => [msg, ...prev].slice(0, 5)); // Keep last 5 logs
    };

    const handleParentClick = () => {
        addLog('🟪 Parent DIV Clicked');
    };

    const handleChildClick = () => {
        // e.stopPropagation(); // Uncomment to stop bubbling
        addLog('🟦 Child BUTTON Clicked');
    };

    const handleStopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
        addLog('🟥 Stop Propagation Button Clicked');
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addLog('📝 Form Submitted (Default Prevented)');
    };

    return (
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-6 rounded-xl shadow-2xl text-white">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">5️⃣ Event Handling</h3>
                <button
                    onClick={() => setShowConcepts(!showConcepts)}
                    className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-200 shadow-lg border border-white border-opacity-30 text-sm"
                >
                    {showConcepts ? '🙈 Hide Concepts' : '📖 Show Concepts'}
                </button>
            </div>

            {showConcepts && (
                <div className="mb-8 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <i className="fa-solid fa-book-open text-pink-600"></i>
                            🖱️ Event Concepts
                        </h4>
                        <button
                            onClick={() => setShowConcepts(false)}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <MarkdownViewer filePath="/src/topics/01-core-concepts/05-events/EventConcepts.md" />
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                {/* Bubbling Demo */}
                <div
                    onClick={handleParentClick}
                    className="bg-purple-900 bg-opacity-50 p-8 rounded-lg border-2 border-purple-400 cursor-pointer hover:bg-opacity-60 transition-colors"
                >
                    <p className="mb-4 font-bold">I am the Parent Div (Click me!)</p>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={handleChildClick}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow"
                        >
                            Normal Button (Bubbles)
                        </button>

                        <button
                            onClick={handleStopPropagation}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow"
                        >
                            Stop Propagation Button
                        </button>
                    </div>
                </div>

                {/* Form Demo */}
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                    <h4 className="font-bold mb-4">Form Submission</h4>
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
                        <input
                            type="text"
                            placeholder="Type something..."
                            className="px-3 py-2 rounded text-gray-800"
                        />
                        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded">
                            Submit Form
                        </button>
                    </form>
                    <p className="text-xs mt-2 opacity-80">
                        (Notice the page doesn't reload because we used <code>e.preventDefault()</code>)
                    </p>
                </div>
            </div>

            {/* Logs */}
            <div className="mt-6 bg-black bg-opacity-40 p-4 rounded-lg font-mono text-sm h-40 overflow-y-auto">
                <div className="text-gray-400 border-b border-gray-600 pb-1 mb-2">Event Logs:</div>
                {logs.length === 0 && <span className="opacity-50">Interact with buttons above...</span>}
                {logs.map((log, i) => (
                    <div key={i} className="mb-1 animate-fade-in">
                        {log}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventExample;
