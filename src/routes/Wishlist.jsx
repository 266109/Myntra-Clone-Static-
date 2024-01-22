import { useSelector } from "react-redux";
import Bagitems from "../components/Bagitems";
import Wishlistitems from "../components/Wishlistitems";

const Wishlist = () => {
  const Bag = useSelector((store) => store.Bag);
  const items = useSelector((store) => store.items);

  const finalitem = items.filter((item) => {
    const itemfound = Bag.indexOf(item.id);
    return itemfound >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <h1 className="fw-bold m-2"> Wishlist</h1>
          {finalitem.map((item) => (
            <Wishlistitems key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Wishlist;

/*

{finalitem.map((item) => {
            <Bagitems item={item} />;
            ("items");
            //console.log("item to show");
          })}
const Wishlist = () => {
  

  return (
    <>
      
    </>
  );
};

export default Wishlist;
*/
