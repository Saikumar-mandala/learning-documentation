import { useState } from 'react';

// ----------------------------------------------------------------------
// ❌ PROBLEM: Prop Drilling
// Data has to be passed through intermediate components
// ----------------------------------------------------------------------

// Level 3: The component that actually needs the data
const GrandChild = ({ user }: { user: string }) => {
    return (
        <div className="bg-red-100 p-4 rounded-lg border-2 border-red-300">
            <p className="text-xs text-red-500 font-bold mb-1">GrandChild Component</p>
            <p className="text-gray-800">
                👋 Hello, <span className="font-bold text-red-600">{user}</span>!
            </p>
            <p className="text-xs text-gray-500 mt-2">
                (I received 'user' from Child, who got it from Parent)
            </p>
        </div>
    );
};

// Level 2: Intermediate component (doesn't use data, just passes it)
const Child = ({ user }: { user: string }) => {
    return (
        <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
            <p className="text-xs text-yellow-600 font-bold mb-1">Child Component</p>
            <p className="text-xs text-gray-500 mb-2">
                I don't need 'user', but I have to accept it to pass it down.
            </p>
            <GrandChild user={user} />
        </div>
    );
};

// Level 1: Parent component
const Parent = ({ user }: { user: string }) => {
    return (
        <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-300">
            <p className="text-xs text-blue-600 font-bold mb-1">Parent Component</p>
            <Child user={user} />
        </div>
    );
};

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------

const PropDrilling = () => {
    const [user, setUser] = useState('John Doe');

    return (
        <div className="bg-gradient-to-br from-gray-600 to-gray-800 p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
                1️⃣ The Problem: Prop Drilling
            </h3>

            <div className="bg-white rounded-lg p-6">
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2">Update User Name:</label>
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="space-y-4">
                    <p className="font-bold text-gray-800">Component Tree Visualization:</p>
                    <Parent user={user} />
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-sm font-mono mb-2">
                    App -&gt; Parent -&gt; Child -&gt; GrandChild
                </p>
                <p className="text-white text-xs">
                    ⚠️ 'Child' and 'Parent' act as unnecessary messengers. Context solves this!
                </p>
            </div>
        </div>
    );
};

export default PropDrilling;
