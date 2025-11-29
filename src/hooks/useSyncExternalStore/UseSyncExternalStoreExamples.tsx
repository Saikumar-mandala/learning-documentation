import { useState, useSyncExternalStore } from 'react';
import MarkdownViewer from '../../components/MarkdownViewer';

// Custom hook using useSyncExternalStore
function useOnlineStatus() {
    return useSyncExternalStore(
        (callback) => {
            window.addEventListener('online', callback);
            window.addEventListener('offline', callback);
            return () => {
                window.removeEventListener('online', callback);
                window.removeEventListener('offline', callback);
            };
        },
        () => navigator.onLine,
        () => true // SSR
    );
}

function useWindowSize() {
    return useSyncExternalStore(
        (callback) => {
            window.addEventListener('resize', callback);
            return () => window.removeEventListener('resize', callback);
        },
        () => ({ width: window.innerWidth, height: window.innerHeight }),
        () => ({ width: 0, height: 0 }) // SSR
    );
}

const UseSyncExternalStoreExamples = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const isOnline = useOnlineStatus();
    const windowSize = useWindowSize();

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-purple-600 to-pink-700 p-8 rounded-2xl shadow-2xl text-white">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <i className="fa-solid fa-plug"></i> useSyncExternalStore
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
                                <i className="fa-solid fa-book-open text-purple-600"></i>
                                useSyncExternalStore Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/hooks/useSyncExternalStore/UseSyncExternalStoreConcepts.md" />
                    </div>
                )}

                <div className="bg-white text-gray-800 rounded-xl p-8 space-y-6">

                    <div className={`p-6 rounded-lg ${isOnline ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500'}`}>
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                            <i className={`fa-solid ${isOnline ? 'fa-wifi text-green-600' : 'fa-wifi-slash text-red-600'}`}></i>
                            Online Status
                        </h3>
                        <p className={`text-lg font-bold ${isOnline ? 'text-green-800' : 'text-red-800'}`}>
                            {isOnline ? '🟢 You are Online' : '🔴 You are Offline'}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            Try disconnecting your internet to see it change!
                        </p>
                    </div>

                    <div className="p-6 bg-blue-100 border-2 border-blue-500 rounded-lg">
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                            <i className="fa-solid fa-window-maximize text-blue-600"></i>
                            Window Size
                        </h3>
                        <p className="text-lg font-mono text-blue-800">
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

export default UseSyncExternalStoreExamples;
