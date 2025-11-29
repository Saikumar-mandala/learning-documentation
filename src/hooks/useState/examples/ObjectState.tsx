import { useState } from 'react';

interface User {
    name: string;
    age: number;
    email: string;
    city: string;
}

const ObjectState = () => {
    const [user, setUser] = useState<User>({
        name: 'John Doe',
        age: 25,
        email: 'john@example.com',
        city: 'New York'
    });

    const updateName = () => {
        setUser({ ...user, name: 'Jane Smith' });
    };

    const updateAge = () => {
        setUser({ ...user, age: user.age + 1 });
    };

    const updateEmail = () => {
        setUser({ ...user, email: 'jane@example.com' });
    };

    const updateCity = () => {
        const cities = ['London', 'Paris', 'Tokyo', 'Sydney', 'New York'];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        setUser({ ...user, city: randomCity });
    };

    const resetUser = () => {
        setUser({
            name: 'John Doe',
            age: 25,
            email: 'john@example.com',
            city: 'New York'
        });
    };

    return (
        <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
                4️⃣ Object State Management
            </h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
                {/* User Profile Display */}
                <div className="bg-white rounded-lg p-6 mb-4">
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">👤 User Profile</h4>
                    <div className="space-y-2">
                        <p className="text-gray-700">
                            <span className="font-semibold">Name:</span> <span className="text-pink-600">{user.name}</span>
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Age:</span> <span className="text-pink-600">{user.age}</span>
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Email:</span> <span className="text-pink-600">{user.email}</span>
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">City:</span> <span className="text-pink-600">{user.city}</span>
                        </p>
                    </div>
                </div>

                {/* Update Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={updateName}
                        className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        📝 Change Name
                    </button>

                    <button
                        onClick={updateAge}
                        className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        🎂 Increase Age
                    </button>

                    <button
                        onClick={updateEmail}
                        className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        📧 Update Email
                    </button>

                    <button
                        onClick={updateCity}
                        className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        🌍 Random City
                    </button>
                </div>

                <button
                    onClick={resetUser}
                    className="w-full mt-3 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                    🔄 Reset Profile
                </button>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-sm font-mono mb-2">
                    setUser(&#123; ...user, name: 'Jane' &#125;);
                </p>
                <p className="text-white text-xs">
                    ⚠️ Use spread operator to preserve other properties!
                </p>
            </div>

            <div className="mt-4 bg-red-900 bg-opacity-30 rounded-lg p-4 border-2 border-red-400">
                <p className="text-white font-bold mb-2">❌ Common Mistake:</p>
                <p className="text-white text-sm font-mono mb-2">
                    user.name = 'Jane'; // DON'T DO THIS!
                </p>
                <p className="text-white text-xs">
                    Never mutate state directly. Always create new object with spread operator.
                </p>
            </div>
        </div>
    );
};

export default ObjectState;
