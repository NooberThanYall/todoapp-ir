"use client";
import React from "react";
import { decrypt } from "@/lib/auth/jwt";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<object>({});

  useEffect(() => {
    // Access document.cookie inside useEffect
    const cookies = document.cookie
      .split("; ")
      .find((row) => row.startsWith("session="));

    const session = cookies ? cookies.split("=")[1] : null;

    if (session) {
      // Decrypt the session cookie
      decrypt(session).then((decodedUser) => {
        setUser(decodedUser); // Update state with user data
      });
    }
  }, []);

  return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
};

// Hook to access the User Context
export const useUser = () => useContext(UserContext);


export default UserProvider;