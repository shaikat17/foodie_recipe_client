import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";
import { getRecipeDB, setRecipeDB } from "../loader/LoaderFunctions";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);
  const [user, setUser] = useState(null)
  const ids = getRecipeDB() || []

  // add item id to the ids and to the localStorage
  const addID = (id) => {
    ids.push(id)
    setRecipeDB(ids)
  }
  

  // fetch chefs data
  const chefsData = async () => {
    const response = await fetch(
      "https://foodie-server-shaikatpal56-gmailcom.vercel.app/chefs"
    );
    
    const data = await response.json();

    // console.log(data);
    setData(data);
    setDataLoading(false);
  };

  useEffect(() => {
    setDataLoading(true);
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

const createUser = (email, pass) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, pass)
}

const signin = (email, pass) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, pass)
}

const updateUserProfile = (user, uName, photoUrl) => {
  return updateProfile(user, {
    displayName: uName, photoURL: photoUrl
  })
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
    <AppContext.Provider value={{ loading, data, chefsData, setLoading, signWithGoogle, user, logOut, createUser, signin, updateUserProfile, dataLoading, setDataLoading, ids, addID }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, ContextProvider }