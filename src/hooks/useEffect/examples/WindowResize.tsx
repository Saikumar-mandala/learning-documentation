import { useState, useEffect } from 'react';

const WindowResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        // Handler function
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Add event listener
        window.addEventListener('resize', handleResize);
        console.log('🟢 Event Listener Added');

        // CLEANUP FUNCTION
        // This runs when component unmounts OR before re-running effect
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('🔴 Event Listener Removed');
        };
    }, []); // Empty array = add listener once on mount

    return (
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
                2️⃣ Event Listeners & Cleanup
            </h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-8 text-center">
                <p className="text-white text-lg mb-2">Resize your browser window!</p>

                <div className="flex justify-center gap-8 mt-6">
                    <div className="bg-white bg-opacity-90 rounded-xl p-6 w-32 shadow-lg transform transition-all hover:scale-110">
                        <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Width</p>
                        <p className="text-4xl font-bold text-purple-600">{windowSize.width}</p>
                        <p className="text-gray-400 text-xs">px</p>
                    </div>

                    <div className="bg-white bg-opacity-90 rounded-xl p-6 w-32 shadow-lg transform transition-all hover:scale-110">
                        <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Height</p>
                        <p className="text-4xl font-bold text-pink-600">{windowSize.height}</p>
                        <p className="text-gray-400 text-xs">px</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-sm font-mono mb-2">
                    <span className="text-purple-300">return</span> () =&gt; &#123;
                </p>
                <p className="text-white text-sm font-mono ml-4">
                    window.removeEventListener(...); <span className="text-green-400">// CLEANUP IS CRITICAL!</span>
                </p>
                <p className="text-white text-sm font-mono">
                    &#125;;
                </p>
            </div>
        </div>
    );
};

export default WindowResize;
