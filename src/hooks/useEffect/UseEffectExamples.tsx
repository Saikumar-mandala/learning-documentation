import { useState } from 'react';
import DataFetching from './examples/DataFetching';
import WindowResize from './examples/WindowResize';
import TimerExample from './examples/TimerExample';
import DependencyDemo from './examples/DependencyDemo';
import MarkdownViewer from '../../components/MarkdownViewer';

const UseEffectExamples = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">⚡ useEffect Hook</h1>
                    <p className="text-xl text-purple-200 mb-6">
                        Handle side effects, data fetching, and subscriptions
                    </p>

                    <button
                        onClick={() => setShowConcepts(!showConcepts)}
                        className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-white border-opacity-30"
                    >
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Detailed Concepts
                    </button>
                </div>

                {/* Concepts Section */}
                {showConcepts && (
                    <div className="mb-12 bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                <i className="fa-solid fa-book-open text-purple-600"></i>
                                useEffect Concepts
                            </h2>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>

                        <MarkdownViewer filePath="/src/hooks/useEffect/UseEffectConcepts.md" />

                        {/* Mistakes Section */}
                        <div className="bg-red-900 bg-opacity-50 rounded-lg p-6 mt-8">
                            <h3 className="text-xl font-bold text-white mb-3">❌ Common Mistakes</h3>
                            <ul className="text-white text-opacity-90 text-sm space-y-1">
                                <li>• Missing dependencies in array</li>
                                <li>• Infinite loops (updating dep inside effect)</li>
                                <li>• Forgetting cleanup for listeners</li>
                            </ul>
                        </div>

                        {/* Pro Tip */}
                        <div className="bg-yellow-900 bg-opacity-30 border-2 border-yellow-400 rounded-lg p-4 mt-6">
                            <p className="text-white font-bold mb-2">💡 Pro Tip:</p>
                            <p className="text-white text-sm">
                                For detailed explanations, check out the{' '}
                                <a
                                    href="/src/hooks/useEffect/UseEffectConcepts.md"
                                    target="_blank"
                                    className="text-yellow-300 underline hover:text-yellow-200"
                                >
                                    UseEffectConcepts.md
                                </a>
                                {' '}file in the project!
                            </p>
                        </div>
                    </div>
                )}

                {/* Examples Grid */}
                <div className="space-y-8">
                    <DataFetching />
                    <WindowResize />
                    <TimerExample />
                    <DependencyDemo />
                </div>

                {/* Summary Section */}
                <div className="mt-12 bg-gradient-to-r from-purple-900 to-pink-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        🎓 What You've Learned
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white bg-opacity-10 rounded-lg p-4">
                            <h3 className="text-lg font-bold text-white mb-2">1️⃣ Data Fetching</h3>
                            <p className="text-white text-opacity-80 text-sm">
                                Fetching API data on component mount
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-10 rounded-lg p-4">
                            <h3 className="text-lg font-bold text-white mb-2">2️⃣ Event Listeners</h3>
                            <p className="text-white text-opacity-80 text-sm">
                                Adding and removing global event listeners
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-10 rounded-lg p-4">
                            <h3 className="text-lg font-bold text-white mb-2">3️⃣ Timers & Cleanup</h3>
                            <p className="text-white text-opacity-80 text-sm">
                                Managing intervals and preventing memory leaks
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-10 rounded-lg p-4">
                            <h3 className="text-lg font-bold text-white mb-2">4️⃣ Dependencies</h3>
                            <p className="text-white text-opacity-80 text-sm">
                                Controlling exactly when effects run
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UseEffectExamples;
