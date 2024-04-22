import Cover from "../../../Shareed/Cover/Cover";
import img from "../../../assets/menu/menu-bg.jpg"
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import desertImg from "../../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupsImg from "../../../assets/menu/soup-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"

const Menu = () => {
 
       const [menu] = useMenu()
       const offered = menu.filter((item) => item.category === "offered");
       const desert = menu.filter((item) => item.category === "dessert");
       const salad = menu.filter((item) => item.category === "salad");
       const soups = menu.filter((item) => item.category === "soup");
       const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Cover bgImg={img} title={"OUR MENU"} des={"World eide best"}></Cover>
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></SectionTitle>

      <div>
        {/* offert */}
        <MenuCategory items={offered}></MenuCategory>
        {/* <button className="btn btn-outline mx-auto justify-center  border-0 border-b-4 block text-black">
          ORDER TOUR FAVOURITE FOOD
        </button> */}
      </div>
      <br />
      {/* desrt */}
      <div>
        <Cover
          bgImg={desertImg}
          title={"DESERT MENU"}
          des={"World eide best"}
        ></Cover>
        <br />
        <MenuCategory items={desert}></MenuCategory>
        
      </div>
      <br />
      {/* salad */}
      <div>
        <Cover
          bgImg={saladImg}
          title={"SALAD MENU"}
          des={"World eide best"}
        ></Cover>
        <MenuCategory items={salad}></MenuCategory>
      </div>
      <br />
      {/* soups */}
      <div>
        <Cover
          bgImg={soupsImg}
          title={"SOUPS MENU"}
          des={"World eide best"}
        ></Cover>
        <MenuCategory items={soups}></MenuCategory>
      </div>
      <br />
      {/* pizza */}
      <div>
        <Cover
          bgImg={pizzaImg}
          title={"PIZZA MENU"}
          des={"World eide best"}
        ></Cover>
        <MenuCategory items={pizza}></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
