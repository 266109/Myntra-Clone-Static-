import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { GiClover } from "react-icons/gi";

const Modal = () => {
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
                      <h2 className="fw-bold mb-0" style={{ color: "green" }}>
                        {" "}
                        <IoCheckmarkDoneCircleOutline /> Congratulations !!!
                      </h2>
                      <ul className="d-grid gap-4 my-5 list-unstyled small">
                        <li className="d-flex gap-4">
                          <FaTags style={{ fontSize: "45px" }} />
                          <div>
                            <h5 className="mb-0">Total Items :</h5>
                            We wish for More Next Time.
                          </div>
                        </li>
                        <li className="d-flex gap-4">
                          <FaPercentage style={{ fontSize: "45px" }} />
                          <div>
                            <h5 className="mb-0">Discounted : </h5>
                            More Items More Discount.
                          </div>
                        </li>
                        <li className="d-flex gap-4">
                          <FaRupeeSign style={{ fontSize: "45px" }} />
                          <div>
                            <h5 className="mb-0">Total Bill: </h5>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
