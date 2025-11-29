import { useState } from 'react';
import MarkdownViewer from '../../components/MarkdownViewer';

const SpreadRestPage = () => {
    const [showConcepts, setShowConcepts] = useState(true);

    return (
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-xl shadow-2xl text-white min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">... Spread & Rest Operators</h3>
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
                            <i className="fa-solid fa-book-open text-purple-600"></i>
                            Spread & Rest Operators Concepts
                        </h4>
                        <button
                            onClick={() => setShowConcepts(false)}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <MarkdownViewer filePath="/src/javascript/02-es6-features/SpreadRestConcepts.md" />
                </div>
            )}
        </div>
    );
};

export default SpreadRestPage;
