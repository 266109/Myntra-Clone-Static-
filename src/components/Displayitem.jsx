import { useDispatch, useSelector } from "react-redux";
import { Bagactions } from "../store/BagSlice";
import { Wishlistactions } from "../store/WishlistSlice";

const Displayitem = ({ item }) => {
  const dispatch = useDispatch();
  const Bagitems = useSelector((store) => store.Bag);
  const elementfound = Bagitems.indexOf(item.id) >= 0;

  const handleAddCLick = () => {
    dispatch(Bagactions.addtoBag(item.id));
    dispatch(Wishlistactions.addtoWishlist(item.id));
  };

  const handleRemoveCLick = () => {
    dispatch(Bagactions.RemovefromBag(item.id));
    dispatch(Wishlistactions.RemovefromWishlist(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementfound ? (
          <button
            id="btn-add-bag"
            className="btn btn-outline-danger"
            onClick={() => handleRemoveCLick()}
          >
            Remove from Bag / WishList
          </button>
        ) : (
          <button
            id="btn-add-bag"
            className="btn btn-outline-success"
            onClick={() => handleAddCLick()}
          >
            Add to Bag /Wishlist
          </button>
        )}
      </div>
    </>
  );
};

export default Displayitem;
