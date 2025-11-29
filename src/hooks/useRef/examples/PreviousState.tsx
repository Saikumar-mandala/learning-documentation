import { useState, useEffect, useRef } from 'react';

const PreviousState = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // Ref to store the previous value
    const prevCountRef = useRef<number | undefined>(undefined);
    const prevTextRef = useRef<string | undefined>(undefined);

    // Update refs AFTER every render
    useEffect(() => {
        prevCountRef.current = count;
        prevTextRef.current = text;
    }, [count, text]);

    // Derive previous values (they will be from the LAST render)
    const prevCount = prevCountRef.current;
    const prevText = prevTextRef.current;

    return (
        <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">3️⃣ Tracking Previous State</h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Counter Example */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Numeric State</h4>
                        <div className="flex items-center gap-4 mb-4">
                            <button
                                onClick={() => setCount(c => c + 1)}
                                className="bg-white text-orange-600 font-bold py-2 px-4 rounded shadow hover:bg-gray-100"
                            >
                                Increment
                            </button>
                            <button
                                onClick={() => setCount(Math.floor(Math.random() * 100))}
                                className="bg-white text-orange-600 font-bold py-2 px-4 rounded shadow hover:bg-gray-100"
                            >
                                Random
                            </button>
                        </div>
                        <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                            <p className="text-xl">Current: <span className="font-bold text-yellow-300">{count}</span></p>
                            <p className="text-sm opacity-70">Previous: {prevCount !== undefined ? prevCount : 'None'}</p>
                        </div>
                    </div>

                    {/* Text Example */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Text State</h4>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Type something..."
                            className="w-full px-4 py-2 rounded text-gray-800 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                        <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                            <p className="text-xl break-all">Current: <span className="font-bold text-yellow-300">"{text}"</span></p>
                            <p className="text-sm opacity-70 break-all">Previous: "{prevText !== undefined ? prevText : ''}"</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 <code>useEffect</code> runs <strong>after</strong> the render. So when we render, <code>ref.current</code> still holds the value from the <em>previous</em> render. We update it in the effect so it's ready for the <em>next</em> render.
                </p>
            </div>
        </div>
    );
};

export default PreviousState;
