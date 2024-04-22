

const FoodCard = ({item}) => {
        const {category, image, recipe, name, price } = item
       return (
         <div className="card w-96 bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
             <img src={image} alt="Shoes" className="rounded-xl" />
           </figure>
           <p className="bg-black text-white absolute right-0 mr-4 mt-4 rounded-lg">
             {price}
           </p>
           <div className="card-body items-center text-center">
             <h2 className="card-title">{name}</h2>
             <p>{recipe}</p>
             <div className="card-actions">
               <button className="btn btn-outline mx-auto justify-center  border-0 border-b-4 block text-orange-500">
               Add To Cart
               </button>
             </div>
           </div>
         </div>
       );
};

export default FoodCard;