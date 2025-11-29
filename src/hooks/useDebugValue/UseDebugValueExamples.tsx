import { useState } from 'react';
import { useOnlineStatus, useDelayedValue } from './examples/CustomHookDemo';
import MarkdownViewer from '../../components/MarkdownViewer';

const UseDebugValueExamples = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    // Using the custom hooks
    const isOnline = useOnlineStatus();
    const [text, setText] = useState('Type here...');
    const deferredText = useDelayedValue(text, 1000);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-8 rounded-2xl shadow-2xl text-white">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">🐞 useDebugValue</h2>
                    <button
                        onClick={() => setShowConcepts(!showConcepts)}
                        className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-200 shadow-lg border border-white border-opacity-30 text-sm"
                    >
                        {showConcepts ? '🙈 Hide Concepts' : '📖 Show Concepts'}
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-8 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-gray-600"></i>
                                useDebugValue Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/hooks/useDebugValue/UseDebugValueConcepts.md" />
                    </div>
                )}

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 space-y-8">

                    <div className="bg-black bg-opacity-30 p-4 rounded-lg border border-white border-opacity-10">
                        <h3 className="text-xl font-bold mb-2">1. Online Status Hook</h3>
                        <p className="mb-4 text-sm opacity-70">
                            Open React DevTools and inspect this component. You will see <code>"Online"</code> or <code>"Offline"</code> next to <code>useOnlineStatus</code>.
                        </p>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold ${isOnline ? 'bg-green-500 text-green-900' : 'bg-red-500 text-white'}`}>
                            {isOnline ? '🟢 You are Online' : '🔴 You are Offline'}
                        </div>
                    </div>

                    <div className="bg-black bg-opacity-30 p-4 rounded-lg border border-white border-opacity-10">
                        <h3 className="text-xl font-bold mb-2">2. Delayed Value Hook</h3>
                        <p className="mb-4 text-sm opacity-70">
                            Type below. The value updates instantly, but the "Deferred" value updates after 1s.
                            <br />
                            Inspect <code>useDelayedValue</code> in DevTools to see the formatted debug label.
                        </p>

                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-full px-4 py-2 rounded text-gray-900 mb-4"
                        />

                        <p>Immediate: <span className="font-mono text-yellow-300">{text}</span></p>
                        <p>Deferred (1s): <span className="font-mono text-blue-300">{deferredText}</span></p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default UseDebugValueExamples;
