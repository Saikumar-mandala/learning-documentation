import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

interface MousePosition {
    x: number;
    y: number;
}

function MouseTracker({ children }: { children: (mouse: MousePosition) => ReactNode }) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return <>{children(mouse)}</>;
}

const RenderPropsExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-rose-600 to-pink-700 p-8 rounded-2xl shadow-2xl text-white min-h-screen">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold"><i className="fa-solid fa-arrow-pointer mr-2"></i>Render Props</h2>
                    <button onClick={() => setShowConcepts(!showConcepts)} className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-sm font-bold">
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Concepts
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-6 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-rose-600"></i>
                                Render Props Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/02-advanced-patterns/04-render-props/RenderPropsConcepts.md" />
                    </div>
                )}

                <MouseTracker>
                    {(mouse) => (
                        <div className="bg-white text-gray-800 rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-4">Mouse Position Tracker</h3>
                            <div className="text-4xl font-mono text-rose-600">
                                x: {mouse.x}, y: {mouse.y}
                            </div>
                            <p className="mt-4 text-gray-600">Move your mouse around to see the coordinates update!</p>
                            <div
                                className="mt-6 w-8 h-8 bg-rose-500 rounded-full transition-all duration-75"
                                style={{ transform: `translate(${mouse.x % 300}px, ${mouse.y % 200}px)` }}
                            />
                        </div>
                    )}
                </MouseTracker>
            </div>
        </div>
    );
};

export default RenderPropsExample;
