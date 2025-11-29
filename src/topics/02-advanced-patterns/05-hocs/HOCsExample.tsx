import { useState } from 'react';
import type { ComponentType } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

function withLoading<P extends object>(Component: ComponentType<P>) {
    return function LoadingComponent(props: P & { isLoading?: boolean }) {
        const { isLoading, ...rest } = props;
        if (isLoading) {
            return (
                <div className="flex items-center justify-center p-8">
                    <i className="fa-solid fa-spinner fa-spin text-4xl text-blue-500"></i>
                </div>
            );
        }
        return <Component {...(rest as P)} />;
    };
}

function UserProfile({ name }: { name: string }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Welcome, {name}!</h3>
            <p className="text-gray-600 mt-2">This component was enhanced with a loading HOC.</p>
        </div>
    );
}

const UserProfileWithLoading = withLoading(UserProfile);

const HOCsExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 p-8 rounded-2xl shadow-2xl text-white">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold"><i className="fa-solid fa-layer-group mr-2"></i>Higher-Order Components</h2>
                    <button onClick={() => setShowConcepts(!showConcepts)} className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-sm font-bold">
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Concepts
                    </button>
                </div>

                {showConcepts && (
                    <div className="mb-6 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <i className="fa-solid fa-book-open text-amber-600"></i>
                                HOCs Concepts
                            </h4>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/topics/02-advanced-patterns/05-hocs/HOCsConcepts.md" />
                    </div>
                )}

                <button
                    onClick={() => setIsLoading(!isLoading)}
                    className="mb-4 px-4 py-2 bg-white text-orange-700 rounded-lg font-bold hover:bg-opacity-90 transition-all"
                >
                    Toggle Loading
                </button>

                <UserProfileWithLoading isLoading={isLoading} name="John Doe" />
            </div>
        </div>
    );
};

export default HOCsExample;
