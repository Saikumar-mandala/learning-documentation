import { useRef, useState } from 'react';
import CustomInput from './examples/CustomInput';
import type { CustomInputHandle } from './examples/CustomInput';
import MarkdownViewer from '../../components/MarkdownViewer';

const UseImperativeHandleExamples = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const inputRef = useRef<CustomInputHandle>(null);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-2xl shadow-2xl text-white">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold">🎮 useImperativeHandle</h2>
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
                                useImperativeHandle Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/hooks/useImperativeHandle/UseImperativeHandleConcepts.md" />
                    </div>
                )}

                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-8">
                    <h3 className="text-xl font-bold mb-6">Parent Component Controls</h3>

                    <div className="mb-8">
                        <CustomInput ref={inputRef} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button
                            onClick={() => inputRef.current?.focusInput()}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                            Focus Input 🔍
                        </button>

                        <button
                            onClick={() => inputRef.current?.shakeInput()}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                            Shake Input 🫨
                        </button>

                        <button
                            onClick={() => inputRef.current?.clearInput()}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                            Clear Input 🧹
                        </button>
                    </div>

                    <p className="mt-6 text-sm opacity-70 text-center">
                        The parent component doesn't touch the DOM directly. It calls methods exposed by the child via <code>useImperativeHandle</code>.
                    </p>
                </div>

            </div>

            <style>{`
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
        </div>
    );
};

export default UseImperativeHandleExamples;
