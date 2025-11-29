import { useState, useRef } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

const FormExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);

    // Controlled State
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        role: 'user'
    });

    // Uncontrolled Ref
    const feedbackRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const feedback = feedbackRef.current?.value || 'No feedback';

        alert(`
      Submitting:
      Username: ${formData.username}
      Email: ${formData.email}
      Role: ${formData.role}
      Feedback (Uncontrolled): ${feedback}
    `);
    };

    return (
        <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-6 rounded-xl shadow-2xl text-white">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">8️⃣ Forms</h3>
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
                            <i className="fa-solid fa-book-open text-cyan-600"></i>
                            📝 Form Concepts
                        </h4>
                        <button
                            onClick={() => setShowConcepts(false)}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <MarkdownViewer filePath="/src/topics/01-core-concepts/08-forms/FormConcepts.md" />
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">

                {/* Controlled Input */}
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Username (Controlled)</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded text-gray-800 focus:ring-2 focus:ring-cyan-300 outline-none"
                        placeholder="Enter username"
                    />
                    <p className="text-xs mt-1 opacity-70">Live State: {formData.username}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Email (Controlled)</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded text-gray-800 focus:ring-2 focus:ring-cyan-300 outline-none"
                        placeholder="Enter email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Role (Select)</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded text-gray-800 focus:ring-2 focus:ring-cyan-300 outline-none"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>

                {/* Uncontrolled Input */}
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2">Feedback (Uncontrolled)</label>
                    <textarea
                        ref={feedbackRef}
                        className="w-full px-3 py-2 rounded text-gray-800 focus:ring-2 focus:ring-cyan-300 outline-none"
                        placeholder="Value accessed only on submit..."
                        rows={3}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded shadow-lg transition-transform hover:scale-105"
                >
                    Submit Data
                </button>

            </form>
        </div>
    );
};

export default FormExample;
