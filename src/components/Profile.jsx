import { FaClipboardUser } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbUserSearch } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
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
                            With supporting text below as a natural lead-in to
                            additional content.
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
                            Not into lists? Try the new grid view.
                          </div>
                        </li>
                        <li className="d-flex gap-4">
                          <TbUserSearch style={{ fontSize: "50px" }} />
                          <div>
                            <h5 className="mb-0">Refer Someone</h5>
                            Save items you love for easy access later.
                          </div>
                        </li>
                        <li className="d-flex gap-4">
                          <MdPayment style={{ fontSize: "50px" }} />
                          <div>
                            <h5 className="mb-0">Payment Methods</h5>
                            Share videos wherever you go.
                          </div>
                        </li>
                      </ul>
                      <button
                        type="button"
                        className="btn btn-lg btn-primary mt-5 w-100"
                        data-bs-dismiss="modal"
                      >
                        Lets Go Shopping
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
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

/*
<div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal" tabIndex="-1">
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
                        <h2 className="fw-bold mb-0">What's new</h2>
                        <div className="card text-center">
                          <div className="card-header">Featured</div>
                          <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">
                              With supporting text below as a natural lead-in to
                              additional content.
                            </p>
                            <a href="#" className="btn btn-primary">
                              Go somewhere
                            </a>
                          </div>
                          <div className="card-footer text-body-secondary">
                            2 days ago
                          </div>
                        </div>

                        <ul className="d-grid gap-4 my-5 list-unstyled small">
                          <li className="d-flex gap-4">
                            <svg
                              className="bi text-body-secondary flex-shrink-0"
                              width="48"
                              height="48"
                            >
                              <use xlink:href="#grid-fill"></use>
                            </svg>
                            <div>
                              <h5 className="mb-0">Grid view</h5>
                              Not into lists? Try the new grid view.
                            </div>
                          </li>
                          <li className="d-flex gap-4">
                            <svg
                              className="bi text-warning flex-shrink-0"
                              width="48"
                              height="48"
                            >
                              <use xlink:href="#bookmark-star"></use>
                            </svg>
                            <div>
                              <h5 className="mb-0">Bookmarks</h5>
                              Save items you love for easy access later.
                            </div>
                          </li>
                          <li className="d-flex gap-4">
                            <svg
                              className="bi text-primary flex-shrink-0"
                              width="48"
                              height="48"
                            >
                              <use xlink:href="#film"></use>
                            </svg>
                            <div>
                              <h5 className="mb-0">Video embeds</h5>
                              Share videos wherever you go.
                            </div>
                          </li>
                        </ul>
                        <button
                          type="button"
                          className="btn btn-lg btn-primary mt-5 w-100"
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
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      */
