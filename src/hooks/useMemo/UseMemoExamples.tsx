import { useState } from 'react';
import ExpensiveCalculation from './examples/ExpensiveCalculation';
import ReferentialEquality from './examples/ReferentialEquality';
import MarkdownViewer from '../../components/MarkdownViewer';

const UseMemoExamples = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        💾 useMemo Hook
                    </h1>
                    <p className="text-xl text-red-200 mb-6">
                        Optimize performance by memoizing expensive calculations
                    </p>

                    <button
                        onClick={() => setShowConcepts(!showConcepts)}
                        className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-white border-opacity-30"
                    >
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Detailed Concepts
                    </button>
                </div>

                {/* Concepts Section */}
                {/* Concepts Section */}
                {showConcepts && (
                    <div className="mb-12 bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                <i className="fa-solid fa-book-open text-red-600"></i>
                                useMemo Concepts
                            </h2>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/hooks/useMemo/UseMemoConcepts.md" />
                    </div>
                )}

                {/* Examples Grid */}
                <div className="space-y-8">
                    <ExpensiveCalculation />
                    <ReferentialEquality />
                </div>

                {/* Summary Section */}
                <div className="mt-12 bg-gradient-to-r from-red-900 to-orange-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        🎓 What You've Learned
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white bg-opacity-10 rounded-lg p-4">
                            <h3 className="text-lg font-bold text-white mb-2">1️⃣ Performance Optimization</h3>
                            <p className="text-white text-opacity-80 text-sm">
                                How to prevent slow functions from blocking the UI during unrelated updates.
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-10 rounded-lg p-4">
                            <h3 className="text-lg font-bold text-white mb-2">2️⃣ Stable References</h3>
                            <p className="text-white text-opacity-80 text-sm">
                                Using <code>useMemo</code> to keep objects stable for dependency arrays.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseMemoExamples;
