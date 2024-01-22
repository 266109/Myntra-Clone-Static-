import Bagitems from "../components/Bagitems";
import Bagsummary from "../components/Bagsummary";
import "./Bag.css";
import { useSelector } from "react-redux";

const Bag = () => {
  const Bag = useSelector((store) => store.Bag);
  const items = useSelector((store) => store.items);

  const finalitems = items.filter((item) => {
    const itemfound = Bag.indexOf(item.id);
    return itemfound >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          {finalitems.map((item) => (
            <Bagitems key={item.id} item={item} />
          ))}

          <Bagsummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
