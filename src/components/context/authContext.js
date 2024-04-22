import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/utils/firebase/core/firebase";
import { insertData } from "@/utils/firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        return { code: "ok" };
      })
      .catch((error) => {
        return { code: error.code };
      });
  };

  const register = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const uid = userCredential.user.uid;
        await insertData("users", uid, {
          type: "",
          verified: false,
          collaborations: 0,
        });
        await insertData("socials", uid, {});
        return { code: "ok" };
      })
      .catch((error) => {
        return { code: error.code };
      });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser)
        localStorage.setItem("userAccount", JSON.stringify(currentUser));
      else localStorage.removeItem("userAccount");
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, register, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
