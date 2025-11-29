import { useReducer } from 'react';

// 1. State Shape
interface FormState {
    username: string;
    email: string;
    age: string;
    isLoading: boolean;
    error: string | null;
}

// 2. Action Types
type FormAction =
    | { type: 'field_change'; field: keyof Omit<FormState, 'isLoading' | 'error'>; value: string }
    | { type: 'submit_start' }
    | { type: 'submit_success' }
    | { type: 'submit_error'; error: string }
    | { type: 'reset' };

const initialState: FormState = {
    username: '',
    email: '',
    age: '',
    isLoading: false,
    error: null,
};

// 3. Reducer Logic
const formReducer = (state: FormState, action: FormAction): FormState => {
    switch (action.type) {
        case 'field_change':
            return {
                ...state,
                [action.field]: action.value,
                error: null // Clear error on edit
            };
        case 'submit_start':
            return { ...state, isLoading: true, error: null };
        case 'submit_success':
            return { ...initialState }; // Reset form on success
        case 'submit_error':
            return { ...state, isLoading: false, error: action.error };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

const ComplexForm = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: 'submit_start' });

        // Simulate API call
        setTimeout(() => {
            if (state.username.length < 3) {
                dispatch({ type: 'submit_error', error: 'Username must be at least 3 characters' });
            } else if (!state.email.includes('@')) {
                dispatch({ type: 'submit_error', error: 'Invalid email address' });
            } else {
                alert(`User ${state.username} created successfully!`);
                dispatch({ type: 'submit_success' });
            }
        }, 1500);
    };

    return (
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">2️⃣ Complex Form State</h3>

            <form onSubmit={handleSubmit} className="bg-white bg-opacity-95 text-gray-800 rounded-lg p-6">
                {state.error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        ⚠️ {state.error}
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold mb-1">Username</label>
                        <input
                            type="text"
                            value={state.username}
                            onChange={(e) => dispatch({
                                type: 'field_change',
                                field: 'username',
                                value: e.target.value
                            })}
                            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            disabled={state.isLoading}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-1">Email</label>
                        <input
                            type="email"
                            value={state.email}
                            onChange={(e) => dispatch({
                                type: 'field_change',
                                field: 'email',
                                value: e.target.value
                            })}
                            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            disabled={state.isLoading}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-1">Age</label>
                        <input
                            type="number"
                            value={state.age}
                            onChange={(e) => dispatch({
                                type: 'field_change',
                                field: 'age',
                                value: e.target.value
                            })}
                            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            disabled={state.isLoading}
                        />
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <button
                        type="submit"
                        disabled={state.isLoading}
                        className={`flex-1 py-2 px-4 rounded font-bold text-white transition-colors ${state.isLoading
                                ? 'bg-blue-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                    >
                        {state.isLoading ? 'Processing...' : 'Submit Form'}
                    </button>

                    <button
                        type="button"
                        onClick={() => dispatch({ type: 'reset' })}
                        disabled={state.isLoading}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded font-bold transition-colors"
                    >
                        Reset
                    </button>
                </div>
            </form>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 Managing multiple fields, loading state, and errors in one object is cleaner with a reducer than multiple useState calls.
                </p>
            </div>
        </div>
    );
};

export default ComplexForm;
