import { User,onAuthStateChanged, signOut } from "firebase/auth"; 
import React, { useEffect, useState} from "react";
import { auth } from "../Pages/firebase";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState<User | null>(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user);
            } else {
                setAuthUser(null); 
            }
        });

        return() => {
            listen();
        }

    }, []);

        const userSignOut = () => {
            signOut(auth).then(() => {
                console.log('Sign out Successful')
            }).catch(error => console.log(error))
        }
    return (
        <div>
            {authUser ? <><p>{`Signed In As ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}
        </div>
    );
};

export default AuthDetails