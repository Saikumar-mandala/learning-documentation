import { useState } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

const ConditionalExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [notifications, setNotifications] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoggedIn(true);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-6 rounded-xl shadow-2xl text-white">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">6️⃣ Conditional Rendering</h3>
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
                            <i className="fa-solid fa-book-open text-indigo-600"></i>
                            🔀 Rendering Concepts
                        </h4>
                        <button
                            onClick={() => setShowConcepts(false)}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <MarkdownViewer filePath="/src/topics/01-core-concepts/06-conditional-rendering/ConditionalConcepts.md" />
                </div>
            )}

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 min-h-[200px] flex flex-col items-center justify-center">

                {/* 1. Early Return Simulation (Loading State) */}
                {isLoading ? (
                    <div className="flex flex-col items-center animate-pulse">
                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p>Logging in...</p>
                    </div>
                ) : isLoggedIn ? (
                    // 2. Logged In View
                    <div className="w-full">
                        <div className="flex justify-between items-center mb-6 border-b border-white border-opacity-20 pb-4">
                            <h4 className="text-xl font-bold">Welcome back, User! 👋</h4>
                            <button
                                onClick={() => setIsLoggedIn(false)}
                                className="text-sm bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition-colors"
                            >
                                Logout
                            </button>
                        </div>

                        <div className="flex gap-4 items-center justify-center mb-6">
                            <button
                                onClick={() => setNotifications(n => n + 1)}
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded"
                            >
                                + Add Notification
                            </button>
                            <button
                                onClick={() => setNotifications(0)}
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded"
                            >
                                Clear All
                            </button>
                        </div>

                        {/* 3. Logical AND & 0 Pitfall Demo */}
                        <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                            <p className="mb-2">Notification Status:</p>

                            {/* Correct Way */}
                            {notifications > 0 && (
                                <div className="inline-block bg-red-500 px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                                    You have {notifications} new messages! 🔔
                                </div>
                            )}

                            {/* Empty State */}
                            {notifications === 0 && (
                                <p className="opacity-50 italic">No new notifications.</p>
                            )}
                        </div>
                    </div>
                ) : (
                    // 4. Logged Out View
                    <div className="text-center">
                        <h4 className="text-xl font-bold mb-4">Please Login</h4>
                        <button
                            onClick={handleLogin}
                            className="bg-white text-indigo-600 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-transform hover:scale-105"
                        >
                            Login
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ConditionalExample;
