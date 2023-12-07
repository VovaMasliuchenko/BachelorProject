import { IoIosArrowRoundForward } from "react-icons/io";
import housePic1 from '../../assets/HousePic1.png'
import housePic2 from '../../assets/HousePic2.png'
import housePic3 from '../../assets/HousePic3.png'
import housePic4 from '../../assets/HousePic4.png'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function OurWorksSection() {

    const notify = () => {
        toast.error("You should have an account!")
    }

    return (
      <div className="flex flex-col pr-32 pl-32 pt-12 pb-16 space-y-5">
        <div>
            <h1 className="font-goldman font-bold text-5xl">Our<br/>Works</h1>
        </div>
        <div className="flex">
        <div class="w-full max-w-sm bg-white border border-gray-200 shadow border-gray-700 flex flex-col mr-5 mb-5">
            <a href="#" className="flex justify-center items-center">
                <img className="p-5 h-[450px] w-[370px]" src={housePic1} alt="product image"/>
            </a>
            <div className="flex flex-col">
                <div class="px-5 pb-5 flex items-center justify-between">
                    <h5 class="text-xl font-inter font-regular">Lorem ipsum</h5>
                </div>
                <div class="px-5 pb-5 flex items-center justify-between">
                    <h5 class="text-button-orange font-inter font-regular">123$</h5>                 
                </div>
            </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 shadow border-gray-700 flex flex-col mr-5 mb-5">
            <a href="#" className="flex justify-center items-center">
                <img className="p-5 h-[450px] w-[370px]" src={housePic2} alt="product image"/>
            </a>
            <div className="flex flex-col">
                <div class="px-5 pb-5 flex items-center justify-between">
                    <h5 class="text-xl font-inter font-regular">Lorem ipsum</h5>
                </div>
                <div class="px-5 pb-5 flex items-center justify-between">
                    <h5 class="text-button-orange font-inter font-regular">123$</h5>                 
                </div>
            </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 shadow border-gray-700 flex flex-col mr-5 mb-5">
            <a href="#" className="flex justify-center items-center">
                <img className="p-5 h-[450px] w-[370px]" src={housePic3} alt="product image"/>
            </a>
            <div className="flex flex-col">
                <div class="px-5 pb-5 flex items-center justify-between">
                    <h5 class="text-xl font-inter font-regular">Lorem ipsum</h5>
                </div>
                <div class="px-5 pb-5 flex items-center justify-between">
                    <h5 class="text-button-orange font-inter font-regular">123$</h5>                 
                </div>
            </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 shadow border-gray-700 flex flex-col mr-5 mb-5">
            <a href="#" className="flex justify-center items-center">
                <img className="p-5 h-[450px] w-[370px]" src={housePic4} alt="product image"/>
            </a>
            <div className="flex flex-col">
                <div class="px-5 pb-5 flex items-center justify-between">
                    <h5 class="text-xl font-inter font-regular">Lorem ipsum</h5>
                </div>
                <div class="px-5 pb-5 flex items-center justify-between">
                    <h5 class="text-button-orange font-inter font-regular">123$</h5>                 
                </div>
            </div>
        </div>
        </div>
        <div className="flex justify-end pr-12">
            <Link to="/register">
            <button className="border-2 p-2 font-inter font-medium flex items-center" onClick={notify}>VIEW ALL <IoIosArrowRoundForward className="ml-1 text-m"/></button>
            </Link>
        </div>
      </div>
    );
  }
  export default OurWorksSection;