import { useEffect, useState } from "react";
import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

function FavoritesPage() {

    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const favoriteProductsCollectionRef = collection(db, "favoriteProducts")
    const cartProductsCollectionRef = collection(db, "cartProducts")

    const [userId, setUserId] = useState(sessionStorage.getItem("user-id")) || null

    const addProductToCart = async (imageUrl, type, price) => {
        await addDoc(cartProductsCollectionRef,{type:type,price:price,imageUrl:imageUrl,userId:sessionStorage.getItem("user-id")})
        .then(() => {
            toast.success("Product was added to cart!")
        })
    }

    const deleteProductFromFavoritesById = async (id) => {
        const productDoc = doc(db, "favoriteProducts", id);
        await deleteDoc(productDoc)
        .then(() => {
            toast.success("Product was deleted from favorites!")
        })
        getFavoriteProducts()
    }

    const deleteAllProductsFromFavorites = async () => {
        favoriteProducts.map((favoriteProduct) => {
            deleteDoc(doc(db, "favoriteProducts", favoriteProduct.id));
        })
        getFavoriteProducts()
    }

    const getFavoriteProducts = async () => {
        const data = await getDocs(favoriteProductsCollectionRef);
        const list = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setFavoriteProducts(list.filter((product) => product.userId === userId))
    }

    useEffect(() => {
        getFavoriteProducts()
    }, [favoriteProducts])

    return (
         <>
         <Header/>
         <div className="flex-col pr-48 pl-48 pt-12 pb-12">
            <h1 className="font-goldman font-regular text-4xl mb-5">Favorites</h1>
            <h1 className={` ${favoriteProducts.length == 0 ? "font-goldman text-xl" : "hidden"}`}>You don't have any products in favorites, add some products to have them in here.</h1>
            <div className="flex justify-center h-[600px] space-x-5">
                <div className="w-1/2 flex flex-col space-y-3">
                    <ul className="flex flex-col space-y-3">
                    {favoriteProducts.map((favoriteProduct) => {
                         return (
                            <>
                            <li className="border border-2 p-4 flex justify-between font-inter font-regular rounded-md">
                                 <div className="flex space-x-3">
                                     <img className="w-[60px] h-[60px]" src={favoriteProduct.imageUrl}></img>
                                     <div>
                                         <h1>{favoriteProduct.type}</h1>
                                         <p>{favoriteProduct.price}$</p>
                                     </div>
                                 </div>
                                 <button onClick={() => deleteProductFromFavoritesById(favoriteProduct.id)}><FaRegTrashAlt/></button>
                                 <button className="border-2 border-button-orange hover:bg-button-orange hover:text-white p-2 transition font-goldman" onClick={() => addProductToCart(favoriteProduct.imageUrl, favoriteProduct.type, favoriteProduct.price)}>Add to cart</button>
                             </li>
                             </>
                         )})}
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
   }
   export default FavoritesPage;