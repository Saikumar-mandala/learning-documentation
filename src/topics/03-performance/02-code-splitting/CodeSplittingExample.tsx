import { useState, lazy, Suspense } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

const HeavyComponent = lazy(() => {
    return new Promise<any>(resolve => {
        setTimeout(() => {
            resolve({
                default: () => (
                    <div className="p-6 bg-purple-100 border-2 border-purple-500 rounded-lg">
                        <h3 className="text-xl font-bold text-purple-800 mb-2">Heavy Component Loaded!</h3>
                        <p className="text-purple-700">This component was lazy-loaded on demand.</p>
                    </div>
                )
            });
        }, 1500);
    });
});

const CodeSplittingExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const [showHeavy, setShowHeavy] = useState(false);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-2xl shadow-2xl text-white">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold"><i className="fa-solid fa-scissors mr-2"></i>Code Splitting</h2>
                    <button onClick={() => setShowConcepts(!showConcepts)} className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-sm font-bold">
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Concepts
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-6 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-purple-600"></i>
                                Code Splitting Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/03-performance/02-code-splitting/CodeSplittingConcepts.md" />
                    </div>
                )}

                <div className="bg-white text-gray-800 rounded-xl p-8 space-y-4">
                    {!showHeavy && (
                        <button
                            onClick={() => setShowHeavy(true)}
                            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700"
                        >
                            Load Heavy Component
                        </button>
                    )}

                    {showHeavy && (
                        <Suspense fallback={
                            <div className="p-6 bg-gray-100 rounded-lg text-center">
                                <i className="fa-solid fa-spinner fa-spin text-3xl text-purple-600"></i>
                                <p className="mt-2 text-gray-600">Loading component...</p>
                            </div>
                        }>
                            <HeavyComponent />
                        </Suspense>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CodeSplittingExample;
