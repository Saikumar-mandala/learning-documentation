import { useState } from 'react';
import { useAuth, AuthProvider } from '../context/AuthContext';

// Login Form Component
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            login(username);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
            <h4 className="text-xl font-bold text-gray-800 mb-4">🔐 Login Required</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600 text-sm font-bold mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter any username"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

// User Profile Component (Protected)
const UserProfile = () => {
    const { user, logout } = useAuth();

    if (!user) return null;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto border-t-4 border-green-500">
            <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                    👤
                </div>
                <h4 className="text-xl font-bold text-gray-800">Welcome, {user.username}!</h4>
                <p className="text-gray-500 text-sm">{user.email}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Session ID</p>
                <p className="font-mono text-xs text-gray-600 truncate">{user.id}</p>
            </div>

            <button
                onClick={logout}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
                Sign Out
            </button>
        </div>
    );
};

// Main Example Component
const AuthExample = () => {
    // We need a wrapper component to use the hook inside the provider
    const Content = () => {
        const { isAuthenticated } = useAuth();
        return isAuthenticated ? <UserProfile /> : <LoginForm />;
    };

    return (
        <AuthProvider>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                    3️⃣ Auth Context (User Session)
                </h3>

                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8">
                    <Content />
                </div>

                <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                    <p className="text-white text-sm font-mono mb-2">
                        <span className="text-purple-300">const</span> &#123; user, isAuthenticated &#125; = <span className="text-yellow-300">useAuth</span>();
                    </p>
                    <p className="text-white text-xs">
                        💡 Authentication state is shared globally. Login/Logout updates all consumers.
                    </p>
                </div>
            </div>
        </AuthProvider>
    );
};

export default AuthExample;
