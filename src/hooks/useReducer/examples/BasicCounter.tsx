import { useReducer } from 'react';

// 1. Define State and Action Types
interface State {
    count: number;
}

type Action =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' }
    | { type: 'set', payload: number };

// 2. Define Initial State
const initialState: State = { count: 0 };

// 3. Define Reducer Function
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        case 'set':
            return { count: action.payload };
        default:
            return state;
    }
};

const BasicCounter = () => {
    // 4. Initialize useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">1️⃣ Basic Counter</h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 text-center">
                <div className="text-6xl font-bold mb-8 font-mono">
                    {state.count}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <button
                        onClick={() => dispatch({ type: 'decrement' })}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg"
                    >
                        - Decrement
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'increment' })}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg"
                    >
                        + Increment
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => dispatch({ type: 'set', payload: 100 })}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-lg text-sm"
                    >
                        Set to 100
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'reset' })}
                        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-lg text-sm"
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-sm font-mono mb-2">
                    dispatch(&#123; type: 'increment' &#125;)
                </p>
                <p className="text-white text-xs">
                    💡 Actions describe "what happened". The reducer decides how state changes.
                </p>
            </div>
        </div>
    );
};

export default BasicCounter;
