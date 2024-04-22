import Cover from "../Shareed/Cover/Cover";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Fetured from "./Fetured/Fetured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";
import img from "../assets/home/banner.jpg"


const Home = () => {
       return (
         <div>
           <Banner></Banner>
           <Category></Category>

           <Fetured></Fetured>

           <PopularMenu></PopularMenu>

           <Cover
             className="my-8"
             bgImg={img}
             title={"BISTRO BOSS"}
             des={
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
             }
           ></Cover>
           <Testimonial></Testimonial>
         </div>
       );
};

export default Home;