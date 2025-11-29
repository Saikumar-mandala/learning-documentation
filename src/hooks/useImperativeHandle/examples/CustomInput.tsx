import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

// Define the handle type (the API we expose)
export interface CustomInputHandle {
    focusInput: () => void;
    clearInput: () => void;
    shakeInput: () => void;
}

const CustomInput = forwardRef<CustomInputHandle, {}>((_, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isShaking, setIsShaking] = useState(false);

    // Expose only these methods to the parent
    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current?.focus();
        },
        clearInput: () => {
            if (inputRef.current) inputRef.current.value = '';
        },
        shakeInput: () => {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
        }
    }));

    return (
        <input
            ref={inputRef}
            type="text"
            placeholder="I am a custom input..."
            className={`w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform ${isShaking ? 'animate-shake' : ''}`}
            style={{ animation: isShaking ? 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both' : 'none' }}
        />
    );
});

export default CustomInput;
