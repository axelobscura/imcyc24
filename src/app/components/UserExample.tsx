/**
 * Example usage of the UserContext hook
 * 
 * This file demonstrates how to use the useUser hook in your components.
 * You can delete this file once you understand how to use the context.
 */

"use client";

import { useUser } from '../context/UserContext';

export default function UserExample() {
    const { user, isLoggedIn, login, logout } = useUser();

    // Example: Login a user
    const handleLogin = () => {
        login({
            id: 1,
            nombre: "Juan Pérez",
            email: "juan@example.com",
            categoria: "concreto"
        });
    };

    // Example: Logout
    const handleLogout = () => {
        logout();
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">User Context Example</h2>

            {isLoggedIn ? (
                <div>
                    <p>Welcome, {user?.nombre}!</p>
                    <p>Email: {user?.email}</p>
                    <button
                        onClick={handleLogout}
                        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <p>Not logged in</p>
                    <button
                        onClick={handleLogin}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Login
                    </button>
                </div>
            )}
        </div>
    );
}
