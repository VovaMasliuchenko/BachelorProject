import { useEffect, useState } from "react";
import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

function CartPage() {

    const [cartProducts, setCartProducts] = useState([]);
    const cartProductsCollectionRef = collection(db, "cartProducts")
    const placedOrdersCollectionRef = collection(db, "placedOrders")

    const [userId, setUserId] = useState(sessionStorage.getItem("user-id")) || null
    const [orderTotal, setOrderTotal] = useState(0)

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [errors, setErrors] = useState({});

    const deleteProductFromCartById = async (id) => {
        const productDoc = doc(db, "cartProducts", id);
        await deleteDoc(productDoc)
        .then(() => {
            toast.success("Product was deleted from cart!")
        })
        getCartProducts()
    }

    const deleteAllProductsFromCart = async () => {
        cartProducts.map((cartProduct) => {
            deleteDoc(doc(db, "cartProducts", cartProduct.id));
        })
        getCartProducts()
    }

    const placeOrder = async (e) => {
        e.preventDefault();
        if(Object.keys(validate()).length === 0) {
            await addDoc(placedOrdersCollectionRef, {address:address,fullName:fullName,phoneNumber:phoneNumber, orderTotal:orderTotal, products:cartProducts})
            .then(() => {
                toast.success("Order was placed successfuly!")
            })
            deleteAllProductsFromCart();
        }
    }

    const getCartProducts = async () => {
        const data = await getDocs(cartProductsCollectionRef);
        const list = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setCartProducts(list.filter((product) => product.userId === userId))
    }

    const validate = (values) => {
        const errors = {};
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  
        if (!fullName) {
          errors.fullName = "Email is required!";
        } 
        if (!address) {
            errors.address = "Email is required!";
          }
        if (!phoneNumber) {
          errors.phoneNumber = "Phone number is required!";
        } else if (!phoneRegex.test(phoneNumber)) {
          errors.phoneRegex =
            "Phone number should contains 12 numbers, with +380 at the beginning";
        }
        setErrors(errors)
        return errors;
    };

    useEffect(() => {
        getCartProducts()
    }, [])

    useEffect(() => {
        setOrderTotal(cartProducts.reduce((total, product) => +product.price + total, 0))
    }, [cartProducts])

    return (
         <>
         <Header/>
         <div className="flex-col pr-48 pl-48 pt-12 pb-12">
            <h1 className="font-goldman font-regular text-4xl mb-5">Your Cart</h1>
            <h1 className={` ${cartProducts.length == 0 ? "font-goldman text-xl" : "hidden"}`}>Your cart is empty, add some products to place an order.</h1>
            <div className="flex justify-center h-[600px] space-x-5">
                <div className="w-1/2 flex flex-col space-y-3">
                    <ul className="flex flex-col space-y-3">
                    {cartProducts.map((cartProduct) => {
                         return (
                            <>
                            <li className="border border-2 p-4 flex justify-between font-inter font-regular rounded-md">
                                 <div className="flex space-x-3">
                                     <img className="w-[60px] h-[60px]" src={cartProduct.imageUrl}></img>
                                     <div>
                                         <h1>{cartProduct.type}</h1>
                                         <p>{cartProduct.price}$</p>
                                     </div>
                                 </div>
                                 <button onClick={() => deleteProductFromCartById(cartProduct.id)}><FaRegTrashAlt/></button>
                             </li>
                             </>
                         )})}
                    </ul>
                    <h1 className={` ${cartProducts.length == 0 ? "hidden" : "font-goldman text-xl"}`}>Order total: {orderTotal} $</h1>
                </div>
                <div className={` ${cartProducts.length == 0 ? "hidden" : "flex flex-col w-1/2 border border-2 pt-5 pb-5 justify-between rounded-md items-center"}`}>
                    <h1 className="font-goldman">To place an order you should leave more info:</h1>
                    <form className="flex flex-col space-y-3 w-1/2 font-goldman">
                        <input placeholder="Full name" className="border-2 rounded-md p-2 outline-none" onChange={(e) => setFullName(e.target.value)}/>
                        <p className="text-red-500 font-light m-2">
                        {errors.fullName}
                        </p>
                        <input placeholder="Address" className="border-2 rounded-md p-2 outline-none" onChange={(e) => setAddress(e.target.value)}/>
                        <p className="text-red-500 font-light m-2">
                        {errors.address}
                        </p>
                        <input placeholder="Phone number" type="number" className="border-2 rounded-md p-2 outline-none" onChange={(e) => setPhoneNumber(e.target.value)}/>
                        <p className="text-red-500 font-light m-2">
                        {errors.phoneNumber}
                        </p>
                    </form>            
                    <button className="border-button-orange border-2 p-2 font-goldman  w-1/2 hover:bg-button-orange hover:text-white transition" onClick={placeOrder}>PLACE ORDER</button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
   }
   export default CartPage;