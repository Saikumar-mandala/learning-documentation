import { useState } from 'react';
import MarkdownViewer from '../../../components/MarkdownViewer';

// 1. Define the shape of the props
interface UserProfileProps {
    username: string;
    role: 'Admin' | 'User' | 'Guest';
    age: number;
    isActive?: boolean; // Optional
    onStatusChange: () => void; // Function prop
}

// 2. Child Component receiving props
const UserProfile = ({
    username,
    role,
    age,
    isActive = false, // Default value
    onStatusChange
}: UserProfileProps) => {

    // Determine badge color based on role
    const roleColor = role === 'Admin' ? 'bg-red-500' : role === 'User' ? 'bg-blue-500' : 'bg-gray-500';

    return (
        <div className="bg-white bg-opacity-10 p-4 rounded-lg border border-white border-opacity-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${isActive ? 'bg-green-500' : 'bg-gray-600'}`}>
                    {username.charAt(0).toUpperCase()}
                </div>
                <div>
                    <h4 className="font-bold text-lg">{username}</h4>
                    <div className="flex gap-2 text-xs mt-1">
                        <span className={`${roleColor} px-2 py-0.5 rounded`}>{role}</span>
                        <span className="bg-white bg-opacity-20 px-2 py-0.5 rounded">Age: {age}</span>
                    </div>
                </div>
            </div>

            <button
                onClick={onStatusChange}
                className={`px-3 py-1 rounded text-sm font-bold transition-colors ${isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
            >
                {isActive ? 'Deactivate' : 'Activate'}
            </button>
        </div>
    );
};

// 3. Parent Component passing props
const PropsExample = () => {
    const [showConcepts, setShowConcepts] = useState(false);
    const [users, setUsers] = useState([
        { id: 1, username: 'Alice', role: 'Admin', age: 28, isActive: true },
        { id: 2, username: 'Bob', role: 'User', age: 32, isActive: false },
    ]);

    const toggleStatus = (id: number) => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, isActive: !user.isActive } : user
        ));
    };

    return (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-xl shadow-2xl text-white">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">3️⃣ Props & Data Flow</h3>
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
                            <i className="fa-solid fa-book-open text-blue-600"></i>
                            🎁 Props Concepts
                        </h4>
                        <button
                            onClick={() => setShowConcepts(false)}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <MarkdownViewer filePath="/src/topics/01-core-concepts/03-props/PropsConcepts.md" />
                </div>
            )}

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 mb-6 space-y-4">
                <p className="mb-4">
                    The parent component manages the state (list of users) and passes data down to the <code>UserProfile</code> children via <strong>props</strong>.
                </p>

                {users.map(user => (
                    <UserProfile
                        key={user.id}
                        username={user.username}
                        role={user.role as 'Admin' | 'User' | 'Guest'}
                        age={user.age}
                        isActive={user.isActive}
                        onStatusChange={() => toggleStatus(user.id)}
                    />
                ))}

                <UserProfile
                    username="GuestUser"
                    role="Guest"
                    age={0}
                    onStatusChange={() => alert("Guests cannot change status!")}
                />
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 Notice how <code>UserProfile</code> doesn't have its own state for <code>isActive</code>. It receives it as a prop.
                    When you click the button, it calls the <code>onStatusChange</code> function passed down from the parent, which updates the parent's state.
                </p>
            </div>
        </div>
    );
};

export default PropsExample;
