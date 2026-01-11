import { useState, useLayoutEffect, useRef } from 'react';

const TooltipExample = () => {
    const [show, setShow] = useState(false);
    const [tooltipHeight, setTooltipHeight] = useState(0);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    // We need to know the height of the tooltip to position it correctly ABOVE the button.
    // If we use useEffect, the tooltip might render below/wrong first, then jump up.
    useLayoutEffect(() => {
        if (tooltipRef.current && buttonRef.current && show) {
            const { height } = tooltipRef.current.getBoundingClientRect();
            setTooltipHeight(height);
            setPosition({
                top: buttonRef.current.offsetTop - height - 10,
                left: buttonRef.current.offsetLeft
            });
        }
    }, [show, tooltipHeight]);

    return (
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-xl shadow-2xl text-white relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-4">2️⃣ DOM Measurement (Tooltip)</h3>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 h-64 flex items-center justify-center relative">
                <button
                    ref={buttonRef}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    className="bg-white text-cyan-700 font-bold py-3 px-6 rounded shadow-lg hover:bg-gray-100 transition-colors"
                >
                    Hover Me
                </button>

                {show && (
                    <div
                        ref={tooltipRef}
                        style={{
                            position: 'absolute',
                            top: position.top,
                            left: position.left,
                        }}
                        className="bg-black text-white text-sm p-2 rounded shadow-xl max-w-xs z-10"
                    >
                        <p className="font-bold mb-1">I am a tooltip!</p>
                        <p>I measured my own height synchronously to position myself perfectly above the button before you even saw me.</p>
                    </div>
                )}
            </div>

            <div className="mt-4 bg-black bg-opacity-30 rounded-lg p-4">
                <p className="text-white text-xs">
                    💡 <code>useLayoutEffect</code> allows us to render the tooltip, measure its height, and adjust its position <strong>before</strong> the browser paints the frame. This prevents the tooltip from jumping around.
                </p>
            </div>
        </div>
    );
};

export default TooltipExample;
