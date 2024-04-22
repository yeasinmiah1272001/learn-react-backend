import { useState } from "react";
import Cover from "../../../Shareed/Cover/Cover";
import orderImg from "../../../assets/shop/order.jpg"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../component/FoodCard/FoodCard";
import OrderTabs from "../OrderTabs/OrderTabs";

const Order = () => {
         const [tabIndex, setTabIndex] = useState(0);
          const [menu] = useMenu();
          const offered = menu.filter((item) => item.category === "offered");
          const desert = menu.filter((item) => item.category === "dessert");
          const salad = menu.filter((item) => item.category === "salad");
          const soups = menu.filter((item) => item.category === "soup");
          const pizza = menu.filter((item) => item.category === "pizza");
       return (
         <div>
           <Cover
             bgImg={orderImg}
             title={"Order Food"}
             des={"World famouse food"}
           ></Cover>

           <div className="">
             <Tabs
               selectedIndex={tabIndex}
               onSelect={(index) => setTabIndex(index)}
             >
               <TabList>
                 <Tab>Salad</Tab>
                 <Tab>Pizza</Tab>
                 <Tab>Soups</Tab>
                 <Tab>Desert</Tab>
               </TabList>
               
               <TabPanel>
                     <OrderTabs items={salad}></OrderTabs>
               </TabPanel>
               <TabPanel>
                     <OrderTabs items={pizza}></OrderTabs>
               </TabPanel>
               <TabPanel>
                     <OrderTabs items={soups}></OrderTabs>
               </TabPanel>
               <TabPanel>
                     <OrderTabs items={desert}></OrderTabs>
               </TabPanel>
              
               
             </Tabs>
           </div>
         </div>
       );
};

export default Order;