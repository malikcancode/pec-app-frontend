import { createContext, useState, useEffect } from "react";
import { getProfile, getAdminProfile } from "../api/api"; // import admin profile

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "user"); // track role
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      const fetchProfile = async () => {
        try {
          let res;
          if (role === "admin") {
            res = await getAdminProfile(token);
          } else {
            res = await getProfile(token);
          }
          setUser(res.data);
        } catch {
          setToken("");
          setUser(null);
          localStorage.removeItem("token");
          localStorage.removeItem("role");
        } finally {
          setLoading(false);
        }
      };
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [token, role]);

  const login = (token, role = "user") => {
    setToken(token);
    setRole(role);
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  };

  const logout = () => {
    setToken("");
    setUser(null);
    setRole("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ user, token, role, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
