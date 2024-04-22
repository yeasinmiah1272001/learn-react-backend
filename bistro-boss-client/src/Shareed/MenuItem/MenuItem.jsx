import React from 'react';

const MenuItem = ({menuItem}) => {
       const {category, image, recipe, name, price } = menuItem
       return (
         <div className="flex items-center gap-5">
           <div className="flex">
             <img
               style={{ borderRadius: "0px 200px 200px 200px" }}
               className="w-[100px] "
               src={image}
               alt=""
             />
           </div>
           <div className=' flex gap-2'>
             <div>
               <h1 className="text-xl font-bold">{name}</h1>
               <p>{recipe}</p>
             </div>
             <h3 className='text-red-500 font-bold'>{price}$</h3>
           </div>
         </div>
       );
};

export default MenuItem;