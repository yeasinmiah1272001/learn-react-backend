import SectionTitle from "../../component/SectionTitle/SectionTitle";
import "./Fetured.css"
import cheif from "../../assets/home/featured.jpg"


const Fetured = () => {
       return (
         <div className="container bg-fixed w-full mt-5 py-10">
           <SectionTitle
             className="my-10"
             heading={"---Check it out---"}
             subHeading={"FROM OUR MENU"}
           ></SectionTitle>
           <div className="flex bg-opacity-25 bg-slate-600 items-center mx-auto  mt-5 justify-center gap-10">
             <img className="w-96" src={cheif} alt="" />
             <div>
               <p className="text-white">
                 March 20, 2023 <br /> WHERE CAN I GET SOME? <br /> Lorem ipsum
                 dolor sit amet consectetur adipisicing elit. Error <br />{" "}
                 voluptate facere, deserunt dolores maiores quod nobis quas
                 quasi. <br /> Eaque repellat recusandae ad laudantium tempore{" "}
                 <br /> consequatur consequuntur omnis ullam maxime tenetur.
               </p>
               <button className="btn btn-outline border-0 border-b-4 text-white">
                 Read More
               </button>
             </div>
           </div>
         </div>
       );
};

export default Fetured;