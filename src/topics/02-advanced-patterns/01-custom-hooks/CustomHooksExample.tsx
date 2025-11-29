import { useState, useEffect } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

// Custom Hook 1: useLocalStorage
function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : initialValue;
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
}

// Custom Hook 2: useWindowSize
function useWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
}

// Custom Hook 3: useDebounce
function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}

const CustomHooksExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const [name, setName] = useLocalStorage('user-name', '');
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);
    const windowSize = useWindowSize();

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-2xl shadow-2xl text-white">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <i className="fa-solid fa-puzzle-piece"></i> Custom Hooks
                    </h2>
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
                                <i className="fa-solid fa-book-open text-emerald-600"></i>
                                Custom Hooks Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/02-advanced-patterns/01-custom-hooks/CustomHooksConcepts.md" />
                    </div>
                )}

                <div className="space-y-6">

                    {/* useLocalStorage Demo */}
                    <div className="bg-white text-gray-800 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <i className="fa-solid fa-database text-emerald-600"></i>
                            useLocalStorage Hook
                        </h3>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name..."
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                        <p className="mt-3 text-sm text-gray-600">
                            ✨ Your name is saved to localStorage! Refresh the page to see it persist.
                        </p>
                    </div>

                    {/* useDebounce Demo */}
                    <div className="bg-white text-gray-800 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <i className="fa-solid fa-clock text-emerald-600"></i>
                            useDebounce Hook
                        </h3>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Type to search..."
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="p-3 bg-gray-100 rounded">
                                <p className="text-xs text-gray-500">Immediate Value:</p>
                                <p className="font-mono text-sm">{search || '(empty)'}</p>
                            </div>
                            <div className="p-3 bg-emerald-100 rounded">
                                <p className="text-xs text-gray-500">Debounced (500ms):</p>
                                <p className="font-mono text-sm">{debouncedSearch || '(empty)'}</p>
                            </div>
                        </div>
                    </div>

                    {/* useWindowSize Demo */}
                    <div className="bg-white text-gray-800 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <i className="fa-solid fa-window-maximize text-emerald-600"></i>
                            useWindowSize Hook
                        </h3>
                        <p className="text-2xl font-mono text-emerald-600">
                            {windowSize.width} × {windowSize.height}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            Resize your browser window to see it update!
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CustomHooksExample;
