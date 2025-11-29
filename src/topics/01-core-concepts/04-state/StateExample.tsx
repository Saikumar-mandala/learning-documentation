import { useState } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

const StateExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    // State for the example
    const [user, setUser] = useState({ name: 'Alice', age: 25, score: 100 });
    const [lastUpdate, setLastUpdate] = useState('None');

    // ❌ Bad: Mutation
    const handleBadUpdate = () => {
        user.score += 10; // Mutating the object directly
        setUser(user); // Passing the SAME reference
        setLastUpdate('Bad Update (Mutation) - UI might not update!');
        console.log('Mutated user:', user);
    };

    // ✅ Good: Immutability
    const handleGoodUpdate = () => {
        // Creating a NEW object
        const newUser = { ...user, score: user.score + 10 };
        setUser(newUser);
        setLastUpdate('Good Update (New Object) - UI updates!');
    };

    return (
        <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-xl shadow-2xl text-white">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">4️⃣ State & Immutability</h3>
                <button
                    onClick={() => setShowConcepts(!showConcepts)}
                    className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-200 shadow-lg border border-white border-opacity-30 text-sm"
                >
                    {showConcepts ? '🙈 Hide Concepts' : '📖 Show Concepts'}
                </button>
            </div>

            {showConcepts && (
                <div className="mb-8 bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 shadow-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <i className="fa-solid fa-book-open text-orange-600"></i>
                            📸 State Concepts
                        </h4>
                        <button
                            onClick={() => setShowConcepts(false)}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <MarkdownViewer filePath="/src/topics/01-core-concepts/04-state/StateConcepts.md" />
                </div>
            )}

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 mb-6">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-white text-orange-600 flex items-center justify-center text-4xl font-bold shadow-lg">
                        {user.score}
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">{user.name}</h4>
                        <p className="opacity-80">Age: {user.age}</p>
                        <p className="text-sm mt-2 bg-black bg-opacity-30 px-3 py-1 rounded">
                            Last Action: <span className="text-yellow-300">{lastUpdate}</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={handleBadUpdate}
                        className="bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-4 rounded shadow-lg transition-colors flex flex-col items-center"
                    >
                        <span>❌ Bad Update</span>
                        <span className="text-xs font-normal opacity-70 mt-1">(Mutates object directly)</span>
                    </button>

                    <button
                        onClick={handleGoodUpdate}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded shadow-lg transition-colors flex flex-col items-center"
                    >
                        <span>✅ Good Update</span>
                        <span className="text-xs font-normal opacity-70 mt-1">(Creates new object)</span>
                    </button>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 Click "Bad Update". The score in the console changes, but the UI <strong>might not update</strong> immediately because the object reference didn't change.
                    <br />
                    Click "Good Update". The UI updates instantly because we created a <strong>new object reference</strong>.
                </p>
            </div>
        </div>
    );
};

export default StateExample;
