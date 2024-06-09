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
            <div className="flex justify-center content-center border-2 rounded-md h-[600px]">
              <div className="flex justify-center space-x-24 mt-32">
                <div className="flex-col space-y-10">
                    <img src={user.photoURL} className="w-[120px] h-[120px] border-2 border-black rounded-full"/>
                    <div>
                      <p className="font-goldman font-regular">Your name : {user.displayName}</p>
                      <p className="font-goldman font-regular">Your email address : {user.email}</p>
                    </div>
                </div>
                <div>
                <h2 className="font-goldman font-regular text-xl">Update your personal inforamtion</h2>
                    <form onSubmit={() => {updateProfile(auth.currentUser, {
                                                displayName: newUsername, phoneNumber: newPhoneNumber, photoURL: newAvatar
                                            }).then(() => {
                                                toast.success("Accout info successfuly updated!")
                                            }).catch((error) => {
                                                toast.error("Error updating account info!")
                                            });
                                          }}
                                     className="mt-5 flex flex-col">
                        <p className="font-goldman font-regular">Password</p>
                        <input onChange={(e) => setNewPassword(e.target.value)} className="border-2 rounded-md" type="password"/>
                        {/* <button onClick={() => updatePassword(user, newPassword)}>Update</button> */}
                        <p className="font-goldman font-regular">Username</p>
                        <input onChange={(e) => setNewUsername(e.target.value)} className="border-2 rounded-md"/>
                        <p className="font-goldman font-regular">User avatar</p>
                        <input onChange={(e) => setNewAvatar(e.target.value)} className="border-2 rounded-md"/>
                        <button type="submit" className="mt-5 border-2 border-button-orange hover:bg-button-orange hover:text-white p-2 transition font-goldman">Confirm</button>
                    </form>
                    
                </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
   }
   export default PersonalAccountPage;