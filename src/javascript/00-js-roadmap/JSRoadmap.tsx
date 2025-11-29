import { useState } from 'react';
import MarkdownViewer from '../../components/MarkdownViewer';


const JavaScriptRoadmapPage = () => {
    const [showFullRoadmap, setShowFullRoadmap] = useState(true);

    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="mb-6 flex items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                            <i className="fa-brands fa-js text-6xl text-gray-900"></i>
                        </div>
                    </div>
                    <h1 className="text-6xl font-bold text-white mb-6">
                        <i className="fa-solid fa-map mr-3"></i>
                        JavaScript Roadmap
                    </h1>
                    <p className="text-2xl text-yellow-200 mb-4">
                        Master These JavaScript Topics Before Learning React
                    </p>
                    <p className="text-lg text-purple-200 max-w-3xl mx-auto">
                        A comprehensive guide to JavaScript fundamentals and ES6+ features essential for React development
                    </p>

                    <button
                        onClick={() => setShowFullRoadmap(!showFullRoadmap)}
                        className="mt-6 px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-white border-opacity-30"
                    >
                        {showFullRoadmap ? '🙈 Hide' : '📖 Show'} Full Roadmap
                    </button>
                </div>

                {/* Quick Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-6 rounded-xl shadow-xl border-2 border-white border-opacity-20">
                        <div className="text-5xl mb-3">✅</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Must Know</h3>
                        <p className="text-white text-opacity-90">
                            Arrow functions, Array methods, Destructuring, Spread operator, Async/Await
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-cyan-700 p-6 rounded-xl shadow-xl border-2 border-white border-opacity-20">
                        <div className="text-5xl mb-3">📚</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Good to Know</h3>
                        <p className="text-white text-opacity-90">
                            Classes, Object manipulation, Higher-order functions, Closures
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-600 to-pink-700 p-6 rounded-xl shadow-xl border-2 border-white border-opacity-20">
                        <div className="text-5xl mb-3">🚀</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Learn Alongside</h3>
                        <p className="text-white text-opacity-90">
                            Advanced DOM, Prototypes, Some ES6+ features can be learned with React
                        </p>
                    </div>
                </div>

                {/* Full Roadmap */}
                {showFullRoadmap && (
                    <div className="mb-12 bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                <i className="fa-solid fa-book-open text-yellow-600"></i>
                                Complete JavaScript Roadmap
                            </h2>
                            <button
                                onClick={() => setShowFullRoadmap(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/JavaScriptRoadmap.md" />
                    </div>
                )}

                {/* Learning Path Timeline */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-white mb-8 text-center">
                        <i className="fa-solid fa-timeline mr-3"></i>
                        Suggested Learning Timeline
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl border-2 border-white border-opacity-20">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold">
                                    1-2
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Weeks 1-2: Basics</h3>
                                    <p className="text-blue-200">Variables, Data Types, Operators, Control Flow, Functions, Arrays & Objects</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl border-2 border-white border-opacity-20">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
                                    3-4
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Weeks 3-4: ES6+ Features</h3>
                                    <p className="text-purple-200">Arrow Functions, Destructuring, Spread/Rest, Template Literals, Modules</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl border-2 border-white border-opacity-20">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl font-bold">
                                    5-6
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Weeks 5-6: Asynchronous & Advanced</h3>
                                    <p className="text-green-200">Promises, Async/Await, Array Methods Mastery, Higher-Order Functions</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-500 to-red-600 bg-opacity-90 p-6 rounded-xl border-2 border-white border-opacity-30 shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl">
                                    🚀
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Week 7+: Start React!</h3>
                                    <p className="text-white text-opacity-90">You're ready to begin your React journey!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-lg p-12 rounded-3xl border-2 border-white border-opacity-20">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Start React?
                    </h2>
                    <p className="text-xl text-blue-200 mb-8">
                        Once you're comfortable with JavaScript fundamentals, dive into React!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="/" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-xl hover:scale-110 transition-transform duration-200 text-lg">
                            <i className="fa-solid fa-home mr-2"></i>
                            Go to Homepage
                        </a>
                        <a href="/core/jsx" className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-lg text-white font-bold rounded-full shadow-xl hover:bg-opacity-30 transition-all duration-200 text-lg border-2 border-white border-opacity-40">
                            <i className="fa-solid fa-rocket mr-2"></i>
                            Start with JSX
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JavaScriptRoadmapPage;
