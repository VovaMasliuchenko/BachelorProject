import { useEffect, useState } from "react";
import logoImg from "../../assets/LogoBlack.png"
import { IoCartOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function Header() {

  const [cartProducts, setCartProducts] = useState([]);
  const location = useLocation()
  console.log(location.pathname)
  const cartProductsCollectionRef = collection(db, "cartProducts")

  const [userId, setUserId] = useState(sessionStorage.getItem("user-id")) || null

  const userSignOut = () => {
    signOut(auth).then(() => {
      sessionStorage.removeItem("user-id")
      toast.success("Successfully signed out!")
    })
  }

  useEffect(() => {
    const getCartProducts = async () => {
        const data = await getDocs(cartProductsCollectionRef);
        const list = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setCartProducts(list.filter((product) => product.userId === userId))
    }
    getCartProducts()
}, [])

    return (
      <div className="flex items-center justify-between w-full pt-4 pb-4 pr-20 pl-20">
        <div className="logo text-3xl font-bold">
          <img src={logoImg}/> 
        </div>
        <div className="flex justify-between items-center grow">
        <div className="ml-16">
          <ul className="flex space-x-4 font-inter pt-4">
            <li>Home</li>
            <li>Contact Us</li>
            <Link to="/categoryPage"><li>Categories</li></Link>
          </ul>  
        </div> 
        <div className="flex items-center font-medium text-lg">
          <ul className="flex text-white items-center text-lg space-x-3">
            <li>
              
            </li>
            <li className="flex items-center">
            <Link to="/favoritesPage">
              <button className="w-full text-footer-bg pl-3 pr-3 pb-1 pt-1">
                {location.pathname == "/favoritesPage" ? <FaHeart className="text-[26px]"/> : <FaRegHeart className="text-[26px]"/>}
                {/* <p className="bg-black pr-2 pl-2 w-[16px] h-[16px] rounded-full text-[10px] flex items-center justify-center ">{cartProducts.length}</p> */}
              </button>
            </Link>
            <Link to="/personalAccountPage">
              <button className="w-full text-footer-bg pl-3 pr-3 pb-1 pt-1">
                {location.pathname == "/personalAccountPage" ? <FaUser className="text-[26px]"/> : <FaRegUser className="text-[26px]"/>}
                {/* <p className="bg-black pr-2 pl-2 w-[16px] h-[16px] rounded-full text-[10px] flex items-center justify-center ">{cartProducts.length}</p> */}
              </button>
            </Link>
            <Link to="/cartPage">
              <button className="w-full border-2 border-footer-bg text-footer-bg rounded-l-lg rounded-bl-lg pl-3 pr-3 pb-1 pt-1 hover:bg-footer-bg hover:text-white transition ease-in-out">
                <IoCartOutline className="text-[26px]"/>
                {/* <p className="bg-black pr-2 pl-2 w-[16px] h-[16px] rounded-full text-[10px] flex items-center justify-center ">{cartProducts.length}</p> */}
              </button>
            </Link>
            <Link to="/welcomePage">
              <button className="w-full border-2 border-footer-bg text-footer-bg rounded-r-lg rounded-br-lg pl-3 pr-3 pb-1 pt-1 hover:bg-footer-bg hover:text-white transition ease-in-out" onClick={userSignOut}>
                <VscSignOut className="text-[26px]"/>
              </button>
            </Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
  export default Header;