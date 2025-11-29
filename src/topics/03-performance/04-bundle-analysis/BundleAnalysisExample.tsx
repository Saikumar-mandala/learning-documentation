import { useState } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

const BundleAnalysisExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-gray-700 to-slate-800 p-8 rounded-2xl shadow-2xl text-white">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold"><i className="fa-solid fa-chart-pie mr-2"></i>Bundle Analysis</h2>
                    <button onClick={() => setShowConcepts(!showConcepts)} className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-sm font-bold">
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Concepts
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-6 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-gray-700"></i>
                                Bundle Analysis Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/03-performance/04-bundle-analysis/BundleAnalysisConcepts.md" />
                    </div>
                )}

                <div className="bg-white text-gray-800 rounded-xl p-8 space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">How to Analyze Your Bundle</h3>

                        <div className="space-y-4">
                            <div className="p-4 bg-gray-100 rounded-lg">
                                <p className="font-bold mb-2">1. Install Visualizer</p>
                                <code className="text-sm bg-gray-800 text-green-400 px-3 py-2 rounded block">
                                    npm install --save-dev rollup-plugin-visualizer
                                </code>
                            </div>

                            <div className="p-4 bg-gray-100 rounded-lg">
                                <p className="font-bold mb-2">2. Build & Analyze</p>
                                <code className="text-sm bg-gray-800 text-green-400 px-3 py-2 rounded block">
                                    npm run build
                                </code>
                            </div>

                            <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Optimization Checklist:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Import only what you need (tree shaking)</li>
                                    <li>Use code splitting for routes</li>
                                    <li>Remove unused dependencies</li>
                                    <li>Choose lighter library alternatives</li>
                                    <li>Compress images and assets</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BundleAnalysisExample;
