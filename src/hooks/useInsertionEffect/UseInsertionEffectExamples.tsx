import { useState, useInsertionEffect } from 'react';
import MarkdownViewer from '../../components/MarkdownViewer';

const DynamicStyledBox = ({ color }: { color: string }) => {
    useInsertionEffect(() => {
        const className = `dynamic-box-${color}`;
        const style = document.createElement('style');
        style.textContent = `
      .${className} {
        background: ${color};
        padding: 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        margin: 10px 0;
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [color]);

    return (
        <div className={`dynamic-box-${color}`}>
            Box with {color} background (styled via useInsertionEffect)
        </div>
    );
};

const UseInsertionEffectExamples = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const [selectedColor, setSelectedColor] = useState('blue');

    const colors = ['blue', 'red', 'green', 'purple', 'orange'];

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-pink-600 to-rose-700 p-8 rounded-2xl shadow-2xl text-white">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <i className="fa-solid fa-syringe"></i> useInsertionEffect
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
                                <i className="fa-solid fa-book-open text-pink-600"></i>
                                useInsertionEffect Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/hooks/useInsertionEffect/UseInsertionEffectConcepts.md" />
                    </div>
                )}

                <div className="bg-white text-gray-800 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Dynamic Style Injection</h3>

                    <p className="mb-4 text-gray-600">
                        Select a color to dynamically inject styles using <code className="bg-gray-100 px-2 py-1 rounded">useInsertionEffect</code>:
                    </p>

                    <div className="flex gap-2 mb-6 flex-wrap">
                        {colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`px-4 py-2 rounded font-bold transition-all ${selectedColor === color
                                    ? 'bg-gray-800 text-white scale-110'
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                    }`}
                            >
                                {color}
                            </button>
                        ))}
                    </div>

                    <DynamicStyledBox color={selectedColor} />

                    <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                        <p className="text-sm text-yellow-800">
                            <i className="fa-solid fa-exclamation-triangle mr-2"></i>
                            <strong>Note:</strong> This hook is primarily for CSS-in-JS library authors. Most applications should use regular <code>useEffect</code> or <code>useLayoutEffect</code>.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UseInsertionEffectExamples;
