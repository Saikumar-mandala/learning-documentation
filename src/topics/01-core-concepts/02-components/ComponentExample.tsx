import { useState } from 'react';
import type { ReactNode } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

// 1. A reusable "Card" component
// It accepts a title and 'children' for flexible content
interface CardProps {
    title: string;
    children: ReactNode;
    color?: string;
}

const Card = ({ title, children, color = 'bg-white' }: CardProps) => {
    return (
        <div className={`${color} bg-opacity-20 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-10 shadow-lg hover:transform hover:scale-105 transition-all duration-300`}>
            <h4 className="font-bold text-lg mb-2 border-b border-white border-opacity-20 pb-2">
                {title}
            </h4>
            <div className="text-sm">
                {children}
            </div>
        </div>
    );
};

// 2. A "Badge" component for smaller items
const Badge = ({ text }: { text: string }) => (
    <span className="inline-block bg-black bg-opacity-30 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
        {text}
    </span>
);

const ComponentExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    return (
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-xl shadow-2xl text-white">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">2️⃣ Components & Composition</h3>
                <button
                    onClick={() => setShowConcepts(!showConcepts)}
                    className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-200 shadow-lg border border-white border-opacity-30 text-sm"
                >
                    {showConcepts ? '🙈 Hide Concepts' : '📖 Show Concepts'}
                </button>
            </div>

            {/* {showConcepts && (
                <div className="mb-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 animate-fade-in">
                    <h4 className="text-xl font-bold mb-4">🧩 Component Concepts</h4>
                    <ul className="list-disc list-inside space-y-2 mb-4 text-sm opacity-90">
                        <li><strong>Functional Components:</strong> Simple JS functions that return JSX.</li>
                        <li><strong>Composition:</strong> Building complex UIs from smaller pieces.</li>
                        <li><strong>Children Prop:</strong> Allows components to be containers.</li>
                    </ul>
                    <div className="bg-indigo-900 bg-opacity-40 p-3 rounded-lg border border-indigo-400 border-opacity-30">
                        <p className="text-sm">
                            📚 Read the full guide: {' '}
                            <a
                                href="/src/topics/01-core-concepts/02-components/ComponentConcepts.md"
                                target="_blank"
                                className="text-yellow-300 underline hover:text-yellow-200 font-bold"
                            >
                                ComponentConcepts.md
                            </a>
                        </p>
                    </div>
                </div>
            )} */}

            {showConcepts && (
                <div className="mb-8 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <i className="fa-solid fa-book-open text-blue-600"></i>
                            🧩 Component Concepts
                        </h4>
                        <button
                            onClick={() => setShowConcepts(false)}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <MarkdownViewer filePath="/src/topics/01-core-concepts/02-components/ComponentConcepts.md" />
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">

                {/* Using the Card component with simple text */}
                <Card title="Simple Card" color="bg-blue-500">
                    <p>This is a simple card component. It wraps its content in a styled container.</p>
                </Card>

                {/* Using the Card component with complex content (Composition) */}
                <Card title="Profile Card" color="bg-pink-500">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-full bg-white bg-opacity-50 flex items-center justify-center text-2xl">
                            👤
                        </div>
                        <div>
                            <p className="font-bold">John Doe</p>
                            <p className="text-xs opacity-75">Software Engineer</p>
                        </div>
                    </div>
                    <div>
                        <Badge text="React" />
                        <Badge text="TypeScript" />
                        <Badge text="Tailwind" />
                    </div>
                </Card>

                {/* Another instance */}
                <Card title="Notification" color="bg-yellow-500">
                    <div className="flex items-start gap-2">
                        <span className="text-xl">🔔</span>
                        <p>You have 3 new messages. Components make it easy to reuse this UI logic!</p>
                    </div>
                </Card>

            </div>

            <div className="mt-6 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 We defined a <code>Card</code> component once and reused it 3 times with different content.
                    This is <strong>Composition</strong>. The <code>children</code> prop allows the Card to be a container for anything we want.
                </p>
            </div>
        </div>
    );
};

export default ComponentExample;
