import { useState } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const ArrayState = () => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'Learn useState', completed: true },
        { id: 2, text: 'Build a project', completed: false }
    ]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            const newTodo: Todo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    return (
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
                5️⃣ Array State - Todo List
            </h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                {/* Add Todo Input */}
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                        placeholder="Add a new todo..."
                        className="flex-1 px-4 py-3 rounded-lg border-2 border-white border-opacity-30 bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:border-white focus:bg-opacity-20 transition-all"
                    />
                    <button
                        onClick={addTodo}
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        ➕ Add
                    </button>
                </div>

                {/* Todo List */}
                <div className="space-y-2 mb-4 max-h-80 overflow-y-auto">
                    {todos.length === 0 ? (
                        <div className="text-center py-8 text-white">
                            <p className="text-xl">📋 No todos yet!</p>
                            <p className="text-sm opacity-75">Add one to get started</p>
                        </div>
                    ) : (
                        todos.map(todo => (
                            <div
                                key={todo.id}
                                className="flex items-center gap-3 bg-white rounded-lg p-4 transition-all duration-200 hover:shadow-lg"
                            >
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                    className="w-5 h-5 cursor-pointer"
                                />
                                <span
                                    className={`flex-1 ${todo.completed
                                            ? 'line-through text-gray-500'
                                            : 'text-gray-800'
                                        } font-medium`}
                                >
                                    {todo.text}
                                </span>
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105"
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Stats and Actions */}
                <div className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                        <div>
                            <p className="text-gray-700">
                                <span className="font-bold">{todos.length}</span> total tasks
                            </p>
                            <p className="text-gray-700">
                                <span className="font-bold">{todos.filter(t => t.completed).length}</span> completed
                            </p>
                        </div>
                        <button
                            onClick={clearCompleted}
                            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105"
                        >
                            🧹 Clear Completed
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-sm font-mono mb-1">
          // Add item
                </p>
                <p className="text-white text-sm font-mono mb-3">
                    setTodos([...todos, newItem]);
                </p>

                <p className="text-white text-sm font-mono mb-1">
          // Remove item
                </p>
                <p className="text-white text-sm font-mono mb-3">
                    setTodos(todos.filter(todo =&gt; todo.id !== id));
                </p>

                <p className="text-white text-sm font-mono mb-1">
          // Update item
                </p>
                <p className="text-white text-sm font-mono">
                    setTodos(todos.map(todo =&gt; ...));
                </p>
            </div>
        </div>
    );
};

export default ArrayState;
