
// hooks/useAuth.js
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    try {
      return loggedIn ? JSON.parse(loggedIn) : false;
    } catch (e) {
      return loggedIn === "true";
    }
  });

  useEffect(() => {
    const syncLogin = () => {
      const loggedIn = localStorage.getItem("isLoggedIn");
      let newUser = false;
      try {
        newUser = loggedIn ? JSON.parse(loggedIn) : false;
      } catch (e) {
        newUser = loggedIn === "true";
      }
      setUser(newUser);
    };

    window.addEventListener("storage", syncLogin);
    window.addEventListener("userDataChanged", syncLogin); // ✅ custom event listener

    return () => {
      window.removeEventListener("storage", syncLogin);
      window.removeEventListener("userDataChanged", syncLogin);
    };
  }, []);

  // return user;
  return true
};
