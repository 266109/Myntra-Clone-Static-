import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaClipboardUser } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbUserSearch } from "react-icons/tb";
import { MdPayment } from "react-icons/md";

const Header = () => {
  const Bag = useSelector((store) => store.Bag);
  //console.log(Bag);

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="../images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span
            className="material-symbols-outlined search_icon"
            style={{ fontWeight: "500" }}
          >
            Search
          </span>
          <input
            id="search_input"
            className="form-control"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <FaCircleUser />
            <span className="action_name">
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleProfile"
              >
                Profile
              </button>
            </span>
          </div>

          <div className="action_container">
            <Link to="/wishlist" className="action_container ">
              <MdOutlineFavoriteBorder />
              <span className="action_name">Wishlist</span>
            </Link>
          </div>

          <Link to="/bag" className="action_container ">
            <IoBagHandleSharp />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{Bag.length}</span>
          </Link>
        </div>
      </header>
      <div
        className="modal fade"
        id="exampleProfile"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
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
                      <h2 className="fw-bold mb-3">Profile</h2>
                      <div className="card text-center">
                        <div className="card-body">
                          <FaClipboardUser
                            style={{ fontSize: "90px", margin: "15px" }}
                          />
                          <h3>Hello XYZ</h3>

                          <p className="card-text">
                            Thanks for Being part of our family
                          </p>

                          <Link to="/bag" className="btn btn-primary">
                            Go to Bag
                          </Link>
                        </div>
                      </div>

                      <ul className="d-grid gap-4 my-5 list-unstyled small">
                        <li className="d-flex gap-4">
                          <MdOutlineVerifiedUser style={{ fontSize: "50px" }} />
                          <div>
                            <h5 className="mb-0">Verified Member</h5>
                            Honorable Member of Myntra Family
                          </div>
                        </li>
                        <li className="d-flex gap-4">
                          <TbUserSearch style={{ fontSize: "50px" }} />
                          <div>
                            <h5 className="mb-0">Refer Someone</h5>
                            Refer your Loved Ones
                          </div>
                        </li>
                        <li className="d-flex gap-4">
                          <MdPayment style={{ fontSize: "50px" }} />
                          <div>
                            <h5 className="mb-0">Payment Methods</h5>
                            Your saved payment Methods
                          </div>
                        </li>
                      </ul>
                      <button
                        type="button"
                        className="btn btn-lg btn-primary mt-5 w-100"
                        data-bs-dismiss="modal"
                      >
                        <Link to="/" className="btn btn-primary">
                          Lets Go Shopping
                        </Link>
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

export default Header;
