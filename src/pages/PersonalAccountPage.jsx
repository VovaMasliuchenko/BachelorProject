import { useEffect, useState } from "react";
import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
import { getAuth, onAuthStateChanged, updateProfile, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";

function PersonalAccountPage() {

    const [user, setUser] = useState('');
    const [newPassword, setNewPassword] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [newAvatar, setNewAvatar] = useState("");

    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          console.log("User is signed out!")
        }
      });
    
    return (
         <>
         <Header/>
         <div className="flex-col pr-48 pl-48 pt-12 pb-12">
            <h1 className="font-goldman font-regular text-4xl mb-5">Your Account</h1>
            <div className="flex justify-center border-2 rounded-md h-[600px] space-x-5">
                <div className="">
                    <p>{user.email}</p>
                    <p>{user.displayName}</p>
                    <p>{user.phoneNumber}</p>
                    <img src={user.photoURL} className="w-[60px] h-[60px]"/>
                </div>
                <div>
                <h2>Update info</h2>
                    <form onSubmit={() => {updateProfile(auth.currentUser, {
                                        displayName: newUsername, phoneNumber: newPhoneNumber, photoURL: newAvatar
                                    }).then(() => {
                                        toast.success("Accout info successfuly updated!")
                                    }).catch((error) => {
                                        toast.error("Error updating account info!")
                                    });
                                }}
                                     className="mt-5">
                        <p>Password</p>
                        <input onChange={(e) => setNewPassword(e.target.value)} className="border-2 rounded-md"/>
                        <button onClick={() => updatePassword(user, newPassword)}>Update</button>
                        <p>Username</p>
                        <input onChange={(e) => setNewUsername(e.target.value)} className="border-2 rounded-md"/>
                        <p>User avatar</p>
                        <input onChange={(e) => setNewAvatar(e.target.value)} className="border-2 rounded-md"/>
                        <button type="submit">Submit</button>
                    </form>
                    
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
   }
   export default PersonalAccountPage;