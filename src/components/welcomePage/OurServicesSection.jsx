import { FaRegCalendarAlt } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

function OurServicesSection() {
    return (
      <div className="flex flex-col items-center pr-48 pl-48 pt-16 pb-24 space-y-10">
        <h1 className="font-goldman font-bold text-5xl">Our Services</h1>
        <div className="flex font-inter space-x-10">
            <div className="flex space-x-5">
                <div className="flex flex-col items-end space-y-3">
                    <FaRegCalendarAlt className="text-[30px]"/>
                    <p className="text-end">Lorem ipsum dolor sit amet consectetur. Tortor adipiscing ut non egestas dolor volutpat dolor in. Molestie egestas lorem ut ac vestibulum purus in scelerisque. Et aliquam orci eget euismod quam ante. Molestie diam ut mattis turpis viverra eget imperdiet pretium.</p>
                </div>
                <div className="flex flex-col items-start space-y-3">
                    <MdConstruction className="text-[30px]"/>
                    <p className="text-start">Lorem ipsum dolor sit amet consectetur. Tortor adipiscing ut non egestas dolor volutpat dolor in. Molestie egestas lorem ut ac vestibulum purus in scelerisque. Et aliquam orci eget euismod quam ante. Molestie diam ut mattis turpis viverra eget imperdiet pretium.</p>
                </div>
            </div>
            <div className="flex space-x-5">
                <div className="flex flex-col items-end space-y-3">
                    <FaRegCalendarAlt className="text-[30px]"/>
                    <p className="text-end">Lorem ipsum dolor sit amet consectetur. Tortor adipiscing ut non egestas dolor volutpat dolor in. Molestie egestas lorem ut ac vestibulum purus in scelerisque. Et aliquam orci eget euismod quam ante. Molestie diam ut mattis turpis viverra eget imperdiet pretium.</p>
                </div>
                <div className="flex flex-col items-start space-y-3">
                    <FaRegCalendarAlt className="text-[30px]"/>
                    <p className="text-start">Lorem ipsum dolor sit amet consectetur. Tortor adipiscing ut non egestas dolor volutpat dolor in. Molestie egestas lorem ut ac vestibulum purus in scelerisque. Et aliquam orci eget euismod quam ante. Molestie diam ut mattis turpis viverra eget imperdiet pretium.</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  export default OurServicesSection;