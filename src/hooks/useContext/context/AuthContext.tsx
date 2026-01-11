import { createContext, useContext, useState, type ReactNode } from 'react';

// User type definition
interface User {
    id: string;
    username: string;
    email: string;
}

// Context shape
interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (username: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (username: string) => {
        // Simulate API login
        setUser({
            id: Date.now().toString(),
            username,
            email: `${username.toLowerCase()}@example.com`
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

/* eslint-disable-next-line react-refresh/only-export-components */
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
