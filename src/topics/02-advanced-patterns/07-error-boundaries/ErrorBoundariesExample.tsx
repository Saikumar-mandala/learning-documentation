import { Component, useState } from 'react';
import type { ReactNode } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="bg-red-100 border-2 border-red-500 rounded-lg p-6 text-red-800">
                    <h3 className="text-xl font-bold mb-2"><i className="fa-solid fa-triangle-exclamation mr-2"></i>Error Caught!</h3>
                    <p className="font-mono text-sm">{this.state.error?.message}</p>
                    <button
                        onClick={() => this.setState({ hasError: false, error: null })}
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded font-bold hover:bg-red-700"
                    >
                        Reset
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

function BuggyComponent() {
    const [count, setCount] = useState(0);

    if (count > 3) {
        throw new Error('Count exceeded 3!');
    }

    return (
        <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Buggy Counter</h3>
            <p className="text-4xl font-bold text-gray-800 mb-4">{count}</p>
            <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700"
            >
                Increment
            </button>
            <p className="text-sm text-gray-600 mt-2">Throws error when count {">"} 3</p>
        </div>
    );
}

const ErrorBoundariesExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-red-600 to-rose-700 p-8 rounded-2xl shadow-2xl text-white">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold"><i className="fa-solid fa-shield-halved mr-2"></i>Error Boundaries</h2>
                    <button onClick={() => setShowConcepts(!showConcepts)} className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-sm font-bold">
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Concepts
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-6 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-red-600"></i>
                                Error Boundaries Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/02-advanced-patterns/07-error-boundaries/ErrorBoundariesConcepts.md" />
                    </div>
                )}

                <ErrorBoundary>
                    <BuggyComponent />
                </ErrorBoundary>
            </div>
        </div>
    );
};

export default ErrorBoundariesExample;
