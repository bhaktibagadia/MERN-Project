import { Children, createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const authorizationToken = `Bearer ${token}`;

    const storetokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken);
    };

    const LogoutUser = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
    };

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);
            } else {
                console.log("Failed to fetch user data", response.statusText);
            }
        } catch (error) {
            console.error("error fetching user data", error);
        }
    };

    useEffect(() => {
        if (token) {
            userAuthentication();
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ isLoggedIn: !!token, storetokenInLS, LogoutUser, user, token, authorizationToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
};
