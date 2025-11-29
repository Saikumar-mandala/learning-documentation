import { useState, memo } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

let renderCount = 0;

const ExpensiveChild = memo(({ value }: { value: number }) => {
    renderCount++;
    return (
        <div className="p-4 bg-green-100 border-2 border-green-500 rounded">
            <p className="font-bold">Memoized Child</p>
            <p>Value: {value}</p>
            <p className="text-sm text-green-700">Render count: {renderCount}</p>
        </div>
    );
});

const ReactMemoExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-sky-600 to-blue-700 p-8 rounded-2xl shadow-2xl text-white">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold"><i className="fa-solid fa-rocket mr-2"></i>React.memo</h2>
                    <button onClick={() => setShowConcepts(!showConcepts)} className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-sm font-bold">
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Concepts
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-6 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-sky-600"></i>
                                React.memo Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/03-performance/01-react-memo/ReactMemoConcepts.md" />
                    </div>
                )}

                <div className="bg-white text-gray-800 rounded-xl p-8 space-y-4">
                    <div className="flex gap-4">
                        <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-blue-600 text-white rounded font-bold">
                            Increment Parent ({count})
                        </button>
                        <button onClick={() => setValue(value + 1)} className="px-4 py-2 bg-green-600 text-white rounded font-bold">
                            Change Child Value ({value})
                        </button>
                    </div>
                    <ExpensiveChild value={value} />
                    <p className="text-sm text-gray-600">
                        💡 The child only re-renders when its <code>value</code> prop changes, not when parent state changes!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReactMemoExample;
