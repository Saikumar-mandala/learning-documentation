import { useState } from 'react';

const InputForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Form Submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    };

    return (
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
                2️⃣ Form Input Management
            </h3>

            <form onSubmit={handleSubmit} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <div>
                    <label className="block text-white font-semibold mb-2">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg border-2 border-white border-opacity-30 bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:border-white focus:bg-opacity-20 transition-all"
                    />
                </div>

                <div>
                    <label className="block text-white font-semibold mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg border-2 border-white border-opacity-30 bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:border-white focus:bg-opacity-20 transition-all"
                    />
                </div>

                <div>
                    <label className="block text-white font-semibold mb-2">Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border-2 border-white border-opacity-30 bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:border-white focus:bg-opacity-20 transition-all resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                    📧 Submit Form
                </button>
            </form>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-sm font-mono mb-2">
                    <span className="text-yellow-300">const</span> [name, setName] = <span className="text-green-300">useState</span>('');
                </p>
                <p className="text-white text-xs">
                    💡 Each input field has its own state variable
                </p>
            </div>

            <div className="mt-4 bg-white bg-opacity-10 rounded-lg p-4">
                <h4 className="text-white font-bold mb-2">Current Values:</h4>
                <p className="text-white text-sm">Name: <span className="text-yellow-300">{name || '(empty)'}</span></p>
                <p className="text-white text-sm">Email: <span className="text-yellow-300">{email || '(empty)'}</span></p>
                <p className="text-white text-sm">Message: <span className="text-yellow-300">{message || '(empty)'}</span></p>
            </div>
        </div>
    );
};

export default InputForm;
