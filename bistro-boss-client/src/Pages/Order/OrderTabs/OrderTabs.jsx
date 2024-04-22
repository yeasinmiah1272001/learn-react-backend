import FoodCard from "../../../component/FoodCard/FoodCard";


const OrderTabs = ({items}) => {
       return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {items.map((item) => (
             <FoodCard key={item._id} item={item}></FoodCard>
           ))}
         </div>
       );
};

export default OrderTabs;