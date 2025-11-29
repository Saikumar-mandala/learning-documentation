import { forwardRef, useRef, useState } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

const FancyInput = forwardRef<HTMLInputElement>((_, ref) => {
    return (
        <input
            ref={ref}
            className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-lg"
            placeholder="Type something..."
        />
    );
});

const ForwardRefsExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => inputRef.current?.focus();
    const handleClear = () => {
        if (inputRef.current) inputRef.current.value = '';
    };

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-lime-600 to-green-700 p-8 rounded-2xl shadow-2xl text-white">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold"><i className="fa-solid fa-arrow-right-arrow-left mr-2"></i>Forward Refs</h2>
                    <button onClick={() => setShowConcepts(!showConcepts)} className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-sm font-bold">
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Concepts
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-6 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-lime-600"></i>
                                Forward Refs Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/02-advanced-patterns/08-forward-refs/ForwardRefsConcepts.md" />
                    </div>
                )}

                <div className="bg-white text-gray-800 rounded-xl p-8 space-y-4">
                    <FancyInput ref={inputRef} />
                    <div className="flex gap-3">
                        <button onClick={handleFocus} className="px-4 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700">
                            <i className="fa-solid fa-bullseye mr-2"></i>Focus
                        </button>
                        <button onClick={handleClear} className="px-4 py-2 bg-gray-600 text-white rounded font-bold hover:bg-gray-700">
                            <i className="fa-solid fa-eraser mr-2"></i>Clear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForwardRefsExample;
