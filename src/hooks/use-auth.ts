import { useState, useEffect } from "react";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check localStorage on mount
    const storedAuth = localStorage.getItem("examtrust_auth");
    if (storedAuth === "true") {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const login = () => {
    localStorage.setItem("examtrust_auth", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("examtrust_auth");
    setIsLoggedIn(false);
  };

  return { isLoggedIn, isLoading, login, logout };
}
