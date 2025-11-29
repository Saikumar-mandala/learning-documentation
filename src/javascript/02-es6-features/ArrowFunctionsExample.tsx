import { useState } from 'react';
import MarkdownViewer from '../../components/MarkdownViewer';

type Person = {
    name: string;
    skills: string[];
    showSkills: () => void;
};

const ArrowFunctionsExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const [output, setOutput] = useState<Array<string>>([]);


    const addOutput = (message: string) => {
        setOutput(prev => [...prev, message]);
    };

    const clearOutput = () => setOutput([]);

    // Example 1: Basic Arrow Functions
    const traditionalFunction = function (name: string) {
        return `Hello, ${name}!`;
    };

    const arrowFunction = (name: string) => {
        return `Hello, ${name}!`;
    };

    const conciseArrow = (name: string) => `Hello, ${name}!`;

    const runBasicExample = () => {
        clearOutput();
        addOutput(`Traditional: ${traditionalFunction('Alice')}`);
        addOutput(`Arrow: ${arrowFunction('Bob')}`);
        addOutput(`Concise: ${conciseArrow('Charlie')}`);
    };

    // Example 2: Array Methods
    const numbers = [1, 2, 3, 4, 5];

    const runArrayExample = () => {
        clearOutput();
        const doubled = numbers.map(n => n * 2);
        addOutput(`Original: [${numbers.join(', ')}]`);
        addOutput(`Doubled: [${doubled.join(', ')}]`);

        const evens = numbers.filter(n => n % 2 === 0);
        addOutput(`Evens: [${evens.join(', ')}]`);

        const sum = numbers.reduce((acc, n) => acc + n, 0);
        addOutput(`Sum: ${sum}`);
    };

    // Example 3: Lexical 'this'
    const person: Person = {
        name: 'React Developer',
        skills: ['JavaScript', 'TypeScript', 'React'],

        showSkills: function () {
            clearOutput();
            addOutput(`${this.name}'s skills:`);

            setTimeout(() => {
                this.skills.forEach(skill => {
                    addOutput(`- ${skill}`);
                });
            }, 500);
        }
    };

    const runThisExample = () => {
        person.showSkills();
    };

    // Example 4: Array Method Chaining
    const users = [
        { name: 'Alice', age: 25, active: true },
        { name: 'Bob', age: 30, active: false },
        { name: 'Charlie', age: 35, active: true },
        { name: 'David', age: 28, active: true }
    ];

    const runChainingExample = () => {
        clearOutput();

        const activeAdults = users
            .filter(user => user.active)
            .filter(user => user.age > 25)
            .map(user => user.name);

        addOutput('Active users over 25:');
        activeAdults.forEach(name => addOutput(`- ${name}`));
    };

    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        ➡️ Arrow Functions
                    </h1>
                    <p className="text-xl text-blue-200 mb-6">
                        Master the concise syntax essential for React development
                    </p>

                    <button
                        onClick={() => setShowConcepts(!showConcepts)}
                        className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg border-2 border-white border-opacity-30"
                    >
                        {showConcepts ? '🙈 Hide' : '📖 Show'} Detailed Concepts
                    </button>
                </div>

                {/* Concepts Section */}
                {showConcepts && (
                    <div className="mb-12 bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                <i className="fa-solid fa-book-open text-yellow-600"></i>
                                Arrow Functions Concepts
                            </h2>
                            <button
                                onClick={() => setShowConcepts(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl transition-colors"
                            >
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                        <MarkdownViewer filePath="/src/javascript/02-es6-features/ArrowFunctionsConcepts.md" />
                    </div>
                )}

                {/* Examples Grid */}
                <div className="space-y-8">

                    {/* Example 1 */}
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-2xl shadow-2xl border-2 border-white border-opacity-20">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            1️⃣ Basic Arrow Function Syntax
                        </h3>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                            <button
                                onClick={runBasicExample}
                                className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Run Basic Example
                            </button>
                        </div>
                    </div>

                    {/* Example 2 */}
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl shadow-2xl border-2 border-white border-opacity-20">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            2️⃣ Arrow Functions with Array Methods
                        </h3>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                            <button
                                onClick={runArrayExample}
                                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-purple-50 transition-colors shadow-lg"
                            >
                                Run Array Methods Example
                            </button>
                        </div>
                    </div>

                    {/* Example 3 */}
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl shadow-2xl border-2 border-white border-opacity-20">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            3️⃣ Lexical 'this' Binding
                        </h3>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                            <button
                                onClick={runThisExample}
                                className="w-full bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-green-50 transition-colors shadow-lg"
                            >
                                Run 'this' Binding Example
                            </button>
                        </div>
                    </div>

                    {/* Example 4 */}
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-2xl shadow-2xl border-2 border-white border-opacity-20">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            4️⃣ Chaining Array Methods (React Pattern)
                        </h3>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                            <button
                                onClick={runChainingExample}
                                className="w-full bg-white text-orange-600 font-bold py-3 px-6 rounded-lg hover:bg-orange-50 transition-colors shadow-lg"
                            >
                                Run Chaining Example
                            </button>
                        </div>
                    </div>
                </div>

                {/* Console Output */}
                {output.length > 0 && (
                    <div className="mt-8 bg-gray-900 rounded-2xl p-6 border-2 border-green-400">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-green-400 font-mono">
                                <i className="fa-solid fa-terminal mr-2"></i>
                                Console Output
                            </h3>
                            <button
                                onClick={clearOutput}
                                className="text-red-400 hover:text-red-300 transition-colors"
                            >
                                <i className="fa-solid fa-trash"></i> Clear
                            </button>
                        </div>
                        <div className="space-y-1 font-mono text-sm">
                            {output.map((line, index) => (
                                <div key={index} className="text-green-300">
                                    <span className="text-gray-500">&gt;</span> {line}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Summary */}
                <div className="mt-12 bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        🎓 Key Takeaways
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white bg-opacity-10 rounded-lg p-4">
                            <h3 className="text-lg font-bold text-white mb-2">✅ Use Arrow Functions For:</h3>
                            <ul className="text-white text-opacity-80 text-sm space-y-1 list-disc list-inside">
                                <li>Array methods (map, filter, reduce)</li>
                                <li>Callbacks and event handlers</li>
                                <li>Short, simple functions</li>
                                <li>When you need lexical 'this'</li>
                            </ul>
                        </div>
                        <div className="bg-white bg-opacity-10 rounded-lg p-4">
                            <h3 className="text-lg font-bold text-white mb-2">❌ Avoid Arrow Functions For:</h3>
                            <ul className="text-white text-opacity-80 text-sm space-y-1 list-disc list-inside">
                                <li>Object methods</li>
                                <li>Constructor functions</li>
                                <li>When you need 'arguments' object</li>
                                <li>When you need dynamic 'this'</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ArrowFunctionsExample;
