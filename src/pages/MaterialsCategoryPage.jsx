import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
import materialsCategoryHero from "../assets/materialsCategoryHero.png"
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";

function MaterialsCategoryPage() {

    const [products, setProducts] = useState([]);

    const materialsCategoryCollectionRef = collection(db, "materialsCategoryProducts")
    const cartProductsCollectionRef = collection(db, "cartProducts")

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const pagedRecords = products.slice(firstIndex, lastIndex);
    const npage = Math.ceil(products.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const previousPage = () => {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if(currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }

    const changeCurrnetPage = (id) => {
        setCurrentPage(id);
    }

    const addProductToCart = async (imageUrl, type, price) => {
        await addDoc(cartProductsCollectionRef,{type:type,price:price,imageUrl:imageUrl,userId:sessionStorage.getItem("user-id")})
        .then(() => {
            toast.success("Product was added to cart!")
        })
    }

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(materialsCategoryCollectionRef);
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getProducts()
    }, [])

    return (
        <>
        <Header />
        <div className="flex flex-col justify-center items-center">
            <div>
                <img src={materialsCategoryHero} className="bg-fixed"/>
            </div>
            <div className="pt-16 pb-16 pr-32 pl-32 space-y-5 flex flex-col">
                <h1 className="font-goldman font-bold text-4xl">Repair<br/>Work</h1>
                <div className="space-y-5">
                    <div className="flex flex-wrap">
                    {products.map((product) => {
                        return (
                        <div class="w-full max-w-sm bg-white border border-gray-200 shadow border-gray-700 flex flex-col mr-5 mb-5">
                        <a href="#" className="flex justify-center items-center">
                            <img className="p-5 h-[450px] w-[370px]" src={product.imageUrl} alt="product image"/>
                        </a>
                        <div className="flex flex-col">
                        <div class="px-5 pb-5 flex items-center justify-between">
                            <h5 class="text-xl font-inter font-regular">{product.name}</h5>
                            <FaRegHeart/>
                        </div>
                        <div class="px-5 pb-5 flex items-center justify-between">
                            <h5 class="text-button-orange font-inter font-regular">{product.price}$</h5>                 
                            <button className="border-2 border-button-orange hover:bg-button-orange hover:text-white p-2 transition font-goldman" onClick={() => addProductToCart(product.imageUrl, product.name, product.price)}>Add to cart</button>
                        </div>
                        </div>
                        </div>
                    );
                    })}
                    </div>
                </div>
                <div class="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                    <div class="lg:w-5/5 w-full  flex items-center justify-between border-t border-gray-200">
                        <div class="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p class="text-sm ml-3 font-medium leading-none ">Previous</p>                    
                        </div>
                        <div class="sm:flex hidden list-none">
                                {
                                    numbers.map((n, i) => (
                                            <li className={`${currentPage === n ? 'text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2' : 'text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'}`} key={i}>
                                                <a onClick={() => changeCurrnetPage(n)}>{n}</a>
                                            </li>
                                    ))
                                }
                        </div>
                        <div class="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                            <p class="text-sm font-medium leading-none mr-3">Next</p>
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default MaterialsCategoryPage;