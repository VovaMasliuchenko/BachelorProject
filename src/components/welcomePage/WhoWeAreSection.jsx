import { IoRocketOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import img from '../../assets/whowepic.png'

function WhoWeAreSection() {
    return (
      <div className="flex pr-32 pl-56 pt-10 pb-32 items-start justify-center font-inter space-x-10">
        <div className="w-1/3">
            <img src={img} className="rounded-md"></img>
        </div>
        <div className="w-1/3">
            <h1 className="font-goldman font-bold text-5xl">Who we are</h1>
            <p className="w-256 text-xl">
                Lorem Ipsum is simply dummy text of<br/>
                the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took<br/>
                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but<br/>
                also the leap into electronic<br/>
                typesetting, remaining essentially unchanged.<br/>
            </p>
        </div>
        <div className="w-1/3 space-y-5">
            <div className="flex space-x-5">
                <IoRocketOutline className="text-3xl"/>
                <p className="w-128">
                    Lorem Ipsum is simply dummy<br/>
                    text of the printing and typesetting<br/>
                    industry. Lorem Ipsum has been<br/>
                    the industry's standard dummy<br/>
                    text ever since the 1500s<br/>
                </p>
            </div>
            <div className="flex space-x-5">
                <FaRegLightbulb className="text-3xl"/>
                <p className="w-128">
                    Lorem Ipsum is simply dummy<br/>
                    text of the printing and typesetting<br/>
                    industry. Lorem Ipsum has been<br/>
                    the industry's standard dummy<br/>
                    text ever since the 1500s<br/>
                </p>
            </div>
        </div>
        </div>
    );
  }
  export default WhoWeAreSection;