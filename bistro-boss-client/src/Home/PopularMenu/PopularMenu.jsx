
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../../Shareed/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  //  const [menu, setMenu] = useState([[]])
  //  useEffect(() =>{
  //         fetch(`/menu.json`)
  //         .then(res => res.json())
  //         .then(data =>{
  //                const menuItem = data.filter(
  //                  (item) => item.category === "popular"
  //                );
  //                setMenu(menuItem)

  //         })
  //  })
  return (
    <div className="my-4">
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {popular.map((menuItem) => (
          <MenuItem menuItem={menuItem} key={menuItem._id}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
