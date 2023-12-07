import materialsCategory from "../assets/materialsCategory.png"
import houseCategory from "../assets/houseCategory.png"
import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
import { Link } from "react-router-dom";

function CategoryPage() {
   return (
        <>
        <Header/>
        <div className="">
           <div className="flex justify-center text-4xl font-goldman font-regular p-5">
               <h1>Choose a category you looking for</h1>
           </div>
           <div className="flex">
               <div className="relative categoryCard">
                <Link to="/repairWorksPage">
                   <img src={materialsCategory} className="transition ease-out categoryCardImg"></img>
                   <div className="opacity-0 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-goldman font-regular categoryCardText">Repair work</div>
                </Link>
               </div>
               <div className="relative categoryCard">
               <Link to="/turnkeyConstructionsPage">
                   <img src={houseCategory} className="transition ease-out categoryCardImg"></img>
                   <div className="opacity-0 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-goldman font-regular categoryCardText">Turnkey construction</div>
               </Link>
               </div>
           </div>
           <div className="flex justify-center text-4xl font-goldman font-regular p-5">
               <h1>We will make your dreams come true</h1>
           </div>
       </div>
       <Footer />
       </>
    );
  }
  export default CategoryPage;