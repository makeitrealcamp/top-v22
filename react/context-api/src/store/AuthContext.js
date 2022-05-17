import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState("");

  const handleLogin = () => {
    setAuthenticated(true);
    setUser("John Doe");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
