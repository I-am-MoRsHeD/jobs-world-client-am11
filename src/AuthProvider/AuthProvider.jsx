// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false);
            // if user exist
            if(currentUser){
        
                axios.post('https://jobs-world-server-am11-lt5zm4spz-i-am-morsheds-projects.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token response', res.data)
                })
            }
            else{
                axios.post('https://jobs-world-server-am11-lt5zm4spz-i-am-morsheds-projects.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const signInPopUp = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signUser,
        logOut,
        signInPopUp
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;