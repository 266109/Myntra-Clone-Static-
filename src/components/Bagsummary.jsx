import { useSelector } from "react-redux";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { GiClover } from "react-icons/gi";
import { Link } from "react-router-dom";

const Bagsummary = () => {
  const Bag = useSelector((store) => store.Bag);
  const items = useSelector((store) => store.items);

  const finalitems = items.filter((item) => {
    const itemfound = Bag.indexOf(item.id);
    return itemfound >= 0;
  });
  let totalItem = Bag.length;
  let CONVENIENCE_FEES = totalItem === 0 ? 0 : 99;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalitems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  /*const summary = {
    totalItem: Bag.length,
    totalMRP: 3309,
    totalDiscount: 1299,
    finalPayment: 2010,
  };*/
  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP </span>
            <span className="price-item-value">₹{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP </span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value"> ₹{CONVENIENCE_FEES}</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount </span>
            <span className="price-item-value">₹{finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">
            <button
              style={{ backgroundColor: "transparent", border: "none" }}
              onClick={() => console.log("Place Order Clicked")}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              PLACE ORDER
            </button>
          </div>
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ width: "120%" }}>
          <div className="modal-content">
            <div className="modal-body">
              <div
                className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
                tabIndex="-1"
                role="dialog"
                id="modalTour"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content rounded-4 shadow">
                    <div className="modal-body p-5">
                      <h2 className="fw-bold mb-0" style={{ color: "green" }}>
                        {" "}
                        <IoCheckmarkDoneCircleOutline /> Congratulations !!!
                      </h2>
                      <ul className="d-grid gap-4 my-5 list-unstyled small">
                        <li className="d-flex gap-4">
                          <FaTags style={{ fontSize: "45px" }} />
                          <div>
                            <h5 className="mb-0">Total Items : {totalItem}</h5>
                            We wish for More Next Time.
                          </div>
                        </li>
                        <li className="d-flex gap-4">
                          <FaPercentage style={{ fontSize: "45px" }} />
                          <div>
                            <h5 className="mb-0">
                              Discounted : Rs {totalDiscount}
                            </h5>
                            More Items More Discount.
                          </div>
                        </li>
                        <li className="d-flex gap-4">
                          <FaRupeeSign style={{ fontSize: "45px" }} />
                          <div>
                            <h5 className="mb-0">
                              Total Bill: Rs {finalPayment}
                            </h5>
                            Lowest for the Selected Items
                          </div>
                        </li>
                      </ul>

                      <center>
                        <h5 className="mb-0">
                          See You Next Time with More offers for You !!{" "}
                        </h5>
                        <GiClover
                          style={{
                            marginTop: "10px",
                            color: "",
                            fontSize: "30px",
                          }}
                        />
                      </center>

                      <button
                        type="button"
                        className="btn btn-lg btn-outline-primary mt-5 w-100"
                        data-bs-dismiss="modal"
                      >
                        Great, thanks!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bagsummary;
