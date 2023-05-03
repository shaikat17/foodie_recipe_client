import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)
  

  // fetch chefs data
  const chefsData = async () => {
    const response = await fetch(
      "https://foodie-server-shaikatpal56-gmailcom.vercel.app/chefs"
    );
    
    const data = await response.json();

    // console.log(data);
    setData(data);
    // setLoading(false);
  };

  useEffect(() => {
    // setLoading(true);
    chefsData();
  }, []);

  const signWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // logout function
  const logOut = () =>{
    return signOut(auth);
}

  // observe auth state change
  useEffect( () =>{
    // setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        // console.log('auth state change', currentUser);
        setUser(currentUser);
        setLoading(false)
    });

    return () =>{
        unsubscribe();
    }

}, [])


  return (
    <AppContext.Provider value={{ loading, data, chefsData, setLoading, signWithGoogle, user, logOut }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, ContextProvider }