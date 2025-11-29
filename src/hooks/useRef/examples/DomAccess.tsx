import { useRef } from 'react';

const DomAccess = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleFocus = () => {
        // Directly access the DOM element
        inputRef.current?.focus();
        // Optional: Add a visual effect via direct DOM manipulation (use sparingly!)
        if (inputRef.current) {
            inputRef.current.style.backgroundColor = '#e0e7ff';
            setTimeout(() => {
                if (inputRef.current) inputRef.current.style.backgroundColor = 'white';
            }, 500);
        }
    };

    const handlePlayPause = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return (
        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-6 rounded-xl shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">1️⃣ DOM Access</h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h4 className="font-bold text-lg mb-3">Input Focus</h4>
                <div className="flex gap-4 mb-6">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="I'm waiting for focus..."
                        className="flex-1 px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors duration-300"
                    />
                    <button
                        onClick={handleFocus}
                        className="bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 px-6 rounded transition-colors"
                    >
                        Focus Input
                    </button>
                </div>

                <h4 className="font-bold text-lg mb-3">Video Control</h4>
                <div className="bg-black rounded-lg overflow-hidden relative">
                    <video
                        ref={videoRef}
                        width="100%"
                        loop
                        className="opacity-80"
                        poster="https://via.placeholder.com/600x300/000000/FFFFFF?text=Video+Placeholder"
                    >
                        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute bottom-4 left-4">
                        <button
                            onClick={handlePlayPause}
                            className="bg-white text-indigo-900 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition-transform active:scale-95"
                        >
                            ⏯️ Play/Pause
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 We use <code>ref.current</code> to call native DOM methods like <code>.focus()</code> and <code>.play()</code> without using document.querySelector.
                </p>
            </div>
        </div>
    );
};

export default DomAccess;
