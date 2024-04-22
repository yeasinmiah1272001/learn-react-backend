
import { Link } from "react-router-dom";
import MenuItem from "../../../Shareed/MenuItem/MenuItem";

const MenuCategory = ({items, title}) => {
   
       return (
         <div className="p-10">
           <div className="grid md:grid-cols-2 gap-6 mt-10">
             {items.map((menuItem) => (
               <MenuItem menuItem={menuItem} key={menuItem._id}></MenuItem>
             ))}
           </div>
           <Link to={`/order`}>
             <button className="btn btn-outline mx-auto justify-center  border-0 border-b-4 block text-black">
               ORDER TOUR FAVOURITE FOOD
             </button>
           </Link>
         </div>
       );
};

export default MenuCategory;