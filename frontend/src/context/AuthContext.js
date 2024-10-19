// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    user: null,
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (auth.token) {
        try {
          const response = await fetch('http://localhost:8080/api/auth/user', {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          });
          const data = await response.json();
          if (response.ok) {
            setAuth({ ...auth, user: data.user });
          } else {
            setAuth({ token: null, user: null });
            localStorage.removeItem('token');
          }
        } catch (error) {
          console.error('Error fetching user:', error);
          setAuth({ token: null, user: null });
          localStorage.removeItem('token');
        }
      }
    };

    fetchUser();
  }, [auth.token]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
