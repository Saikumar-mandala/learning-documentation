import { useState, useEffect, useDebugValue } from 'react';

// Custom Hook 1: Simple Debug Value
export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    // 🐞 This label appears in React DevTools!
    useDebugValue(isOnline ? '🟢 Online' : '🔴 Offline');

    return isOnline;
}

// Custom Hook 2: Lazy Debug Value (simulated delay)
export function useDelayedValue(value: string, delay: number) {
    const [delayedValue, setDelayedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDelayedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    // 🐞 Lazy formatting function
    useDebugValue(delayedValue, val => `Delayed by ${delay}ms: ${val}`);

    return delayedValue;
}
