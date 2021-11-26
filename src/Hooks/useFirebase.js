import { useEffect, useState } from "react";
import initializeFirebase from "../compoments/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history?.replace(destination)
                const newUser = { email, displayName: name }
                setAuthError('')
                setUser(newUser)
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                // Signed in 
                const user = userCredential.user;

            })
            .catch((error) => {
                console.log(error);
                // const errorCode = error.code;
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false))
    }






    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://fierce-sierra-20822.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }



    useEffect(() => {
        fetch(`https://fierce-sierra-20822.herokuapp.com/user?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data?.admin))
    }, [user?.email])




    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history?.replace(destination)
                setAuthError('')
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {

            })
            .finally(() => setIsLoading(false));
    }

    const signinUsignGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')
                const user = result.user;
                // ...
            }).catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));;
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [])



    return {
        user,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        authError,
        signinUsignGoogle,
        admin

    }
}


export default useFirebase;