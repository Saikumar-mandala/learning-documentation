import { useTheme, ThemeProvider } from '../context/ThemeContext';

// A component that consumes the theme
const ThemedCard = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`p-8 rounded-xl transition-all duration-500 ${theme === 'light'
                ? 'bg-white text-gray-800 shadow-lg'
                : 'bg-gray-800 text-white shadow-2xl border border-gray-700'
            }`}>
            <h4 className="text-2xl font-bold mb-4">
                {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </h4>
            <p className="mb-6 opacity-80">
                This component accesses the theme directly from the Context,
                without any props passed from the parent!
            </p>

            <button
                onClick={toggleTheme}
                className={`px-6 py-3 rounded-lg font-bold transition-transform transform hover:scale-105 ${theme === 'light'
                        ? 'bg-gray-900 text-white hover:bg-black'
                        : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                    }`}
            >
                Toggle Theme
            </button>
        </div>
    );
};

// Main Example Component
const ThemeExample = () => {
    return (
        // Wrap with Provider so children can access context
        <ThemeProvider>
            <div className="bg-gradient-to-br from-teal-600 to-green-600 p-6 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                    2️⃣ Theme Context (Global State)
                </h3>

                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                    <p className="text-white mb-4">
                        The card below is a consumer of the ThemeContext.
                    </p>
                    <ThemedCard />
                </div>

                <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                    <p className="text-white text-sm font-mono mb-2">
                        <span className="text-purple-300">const</span> &#123; theme, toggleTheme &#125; = <span className="text-yellow-300">useTheme</span>();
                    </p>
                    <p className="text-white text-xs">
                        💡 No props passed! The hook grabs data from the nearest Provider.
                    </p>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default ThemeExample;
