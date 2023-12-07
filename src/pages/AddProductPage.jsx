import { addDoc, collection, deleteDoc, doc, getDocs, limit } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db, storageDB } from "../firebase";
import { FaRegHeart } from "react-icons/fa";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function AddProductPage() {

    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    const productsCollectionRef = collection(db, "products")
    const materialsCategoryCollectionRef = collection(db, "materialsCategoryProducts")
    const cartProductsCollectionRef = collection(db, "cartProducts")
    const placedOrdersCollectionRef = collection(db, "placedOrders")

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImage, setProductIamge] = useState('');

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        const images = ref(storageDB, `Images/${v4()}`);
        uploadBytes(images, file).then(data => {
            getDownloadURL(data.ref).then(value => {
                console.log(value);
                setProductIamge(value);
            })
        })
    }

    const addProduct = async (e) => {
        e.preventDefault();
        await addDoc(productsCollectionRef,{type:productName,price:productPrice,imageUrl:productImage});
    }

    const addMaterialsCategoryProduct = async (e) => {
        e.preventDefault();
        await addDoc(materialsCategoryCollectionRef,{name:productName,price:productPrice,imageUrl:productImage});
    }

    const addProductToCart = async (imageUrl, type, price) => {
        console.log(imageUrl,type,price)
        await addDoc(cartProductsCollectionRef,{type:type,price:price,imageUrl:imageUrl});
    }

    const deleteProductFromCartById = async (id) => {
        const productDoc = doc(db, "cartProducts", id);
        await deleteDoc(productDoc);
    }

    const deleteAllProductsFromCart = async () => {
        cartProducts.map((cartProduct) => {
            deleteDoc(doc(db, "cartProducts", cartProduct.id));
        })
    }

    const placeOrder = async (e) => {
        e.preventDefault();
        await addDoc(placedOrdersCollectionRef, {address:address,fullName:fullName,phoneNumber:phoneNumber,products:cartProducts});
        deleteAllProductsFromCart();
    }

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        const getCartProducts = async () => {
            const data = await getDocs(cartProductsCollectionRef);
            setCartProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getProducts()
        getCartProducts()
    }, [])

    return (
        <div>
        <div className="flex flex-col items-center space-y-5">
            {/* Form add */}
            <div className="flex space-x-5">
                <form className="flex flex-col items-center space-y-3" onSubmit={addProduct}>
                    1
                    <input placeholder="Name" className="border-black border-2" onChange={(e) => setProductName(e.target.value)}/>
                    <input placeholder="Price" className="border-black border-2" onChange={(e) => setProductPrice(e.target.value)}/>
                    <input type="file" className="" onChange={(e) => handleUpload(e)} />
                    <button className="border-black border-2 p-2 w-32" type="submit">Add</button>
                </form>
                <form className="flex flex-col items-center space-y-3" onSubmit={addMaterialsCategoryProduct}>
                    2
                    <input placeholder="Name" className="border-black border-2" onChange={(e) => setProductName(e.target.value)}/>
                    <input placeholder="Price" className="border-black border-2" onChange={(e) => setProductPrice(e.target.value)}/>
                    <input type="file" className="" onChange={(e) => handleUpload(e)} />
                    <button className="border-black border-2 p-2 w-32" type="submit">Add</button>
                </form>
            </div>
            {/* Output */}
            <div className="flex space-x-5 flex-wrap">
            {products.map((product) => {
                return (
                <div class="w-full max-w-sm bg-white border border-gray-200 shadow border-gray-700">
                <a href="#">
                    <img class="p-5" src={product.imageUrl} alt="product image"/>
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-inter font-regular">{product.type}</h5>
                    </a>
                    <div class="flex items-center justify-between">
                        <h5 class="text-button-orange font-inter font-regular">{product.price}$</h5>
                        <FaRegHeart/>
                    </div>
                </div>
                <button className="border border-2 p-2" onClick={() => addProductToCart(product.imageUrl, product.type, product.price)}>Add to cart</button>
            </div>
            );
            })}
            </div>
            <div className="flex flex-col space-y-5">
                <h1 className="text-3xl">Cart</h1>
                <div className="flex space-x-5">
            {cartProducts.map((cartProduct) => {
                return (
                <div class="w-full max-w-sm bg-white border border-gray-200 shadow border-gray-700">
                <a href="#">
                    <img class="p-5" src={cartProduct.imageUrl} alt="product image"/>
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-inter font-regular">{cartProduct.type}</h5>
                    </a>
                    <div class="flex items-center justify-between">
                        <h5 class="text-button-orange font-inter font-regular">{cartProduct.price}$</h5>
                        <FaRegHeart/>
                    </div>
                </div>
                <button className="border border-2 p-2" onClick={() => deleteProductFromCartById(cartProduct.id)}>Remove from cart</button>
            </div>
            );
            })}
            </div>
            <button className="border border-2 p-2">Buy products from cart</button>
            <form onSubmit={placeOrder}>
                <input placeholder="Full name" onChange={(e) => setFullName(e.target.value)}></input>
                <input placeholder="Address" onChange={(e) => setAddress(e.target.value)}></input>
                <input placeholder="Phone number" onChange={(e) => setPhoneNumber(e.target.value)}></input>
                <button className="border border-2 p-2" type="submit">Buy</button>
            </form>
            </div>
        </div>
        </div>
    );
}

export default AddProductPage;