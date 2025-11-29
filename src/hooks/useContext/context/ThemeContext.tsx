import { createContext, useContext, useState, type ReactNode } from 'react';

// 1. Define the shape of the context
interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

// 2. Create the context with undefined default
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Create a Provider Component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 4. Create a custom hook for easy consumption
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
