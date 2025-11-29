import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

// Theme Context
interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}

function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemedCard() {
    const { theme } = useTheme();

    return (
        <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border-2`}>
            <h3 className="text-xl font-bold mb-2">Themed Component</h3>
            <p>Current theme: <strong>{theme}</strong></p>
            <p className="text-sm mt-2">This component automatically updates when theme changes!</p>
        </div>
    );
}

const ContextPatternExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    return (
        <ThemeProvider>
            <ContextContent showConcepts={showConcepts} setShowConcepts={setShowConcepts} />
        </ThemeProvider>
    );
};

function ContextContent({ showConcepts, setShowConcepts }: { showConcepts: boolean; setShowConcepts: (v: boolean) => void }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className={`bg-gradient-to-br ${theme === 'dark' ? 'from-gray-800 to-gray-900' : 'from-indigo-600 to-purple-700'} p-8 rounded-2xl shadow-2xl text-white transition-all duration-300`}>

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <i className="fa-solid fa-diagram-project"></i> Context Pattern
                    </h2>
                    <div className="flex gap-3">
                        <button
                            onClick={toggleTheme}
                            className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-lg transition-all"
                        >
                            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                        <button
                            onClick={() => setShowConcepts(!showConcepts)}
                            className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-lg transition-all text-sm font-bold"
                        >
                            {showConcepts ? '🙈 Hide' : '📖 Show'} Concepts
                        </button>
                    </div>
                </div>

                {showConcepts && (
                    <div className="mb-6 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-indigo-600"></i>
                                Context Pattern Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/02-advanced-patterns/02-context-pattern/ContextPatternConcepts.md" />
                    </div>
                )}

                <div className="space-y-4">
                    <ThemedCard />
                    <ThemedCard />
                </div>

            </div>
        </div>
    );
}

export default ContextPatternExample;
