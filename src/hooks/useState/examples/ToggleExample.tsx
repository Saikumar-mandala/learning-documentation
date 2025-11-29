import { useState } from 'react';

const ToggleExample = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
                3️⃣ Toggle/Boolean States
            </h3>

            <div className="space-y-4">
                {/* Show/Hide Content */}
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                    <button
                        onClick={() => setIsVisible(!isVisible)}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg mb-4"
                    >
                        {isVisible ? '🙈 Hide' : '👁️ Show'} Content
                    </button>

                    {isVisible && (
                        <div className="mt-4 p-4 bg-white rounded-lg animate-pulse">
                            <p className="text-gray-800 font-semibold">
                                🎉 This content is conditionally rendered based on state!
                            </p>
                        </div>
                    )}
                </div>

                {/* Dark Mode Toggle */}
                <div className={`backdrop-blur-sm rounded-lg p-6 transition-all duration-300 ${isDarkMode
                        ? 'bg-gray-900 bg-opacity-90'
                        : 'bg-white bg-opacity-20'
                    }`}>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`px-6 py-3 font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg ${isDarkMode
                                ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
                                : 'bg-gray-800 hover:bg-gray-900 text-white'
                            }`}
                    >
                        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>

                    <p className={`mt-4 ${isDarkMode ? 'text-white' : 'text-white'}`}>
                        Current Mode: <span className="font-bold">{isDarkMode ? 'Dark 🌙' : 'Light ☀️'}</span>
                    </p>
                </div>

                {/* Menu Toggle */}
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        {isMenuOpen ? '✖️ Close' : '☰ Open'} Menu
                    </button>

                    {isMenuOpen && (
                        <div className="mt-4 bg-white rounded-lg p-4 space-y-2">
                            <div className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer transition-colors">
                                🏠 Home
                            </div>
                            <div className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer transition-colors">
                                ℹ️ About
                            </div>
                            <div className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer transition-colors">
                                📞 Contact
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-sm font-mono mb-2">
                    <span className="text-yellow-300">const</span> [isVisible, setIsVisible] = <span className="text-green-300">useState</span>(<span className="text-blue-300">false</span>);
                </p>
                <p className="text-white text-xs">
                    🔀 Toggle states using: setIsVisible(!isVisible)
                </p>
            </div>
        </div>
    );
};

export default ToggleExample;
