import React, { useState } from "react";
import Footer from "./footer";
import Orderheader from "./orderheader";
import "./orderlist.css";
import "./mainhome.css";
import "font-awesome/css/font-awesome.min.css";
import Shirt from "../assets/shirt.jpg";
import TShirt from "../assets/tshirt.jpg";
import Trousers from "../assets/trousers.jpg";
import Jeans from "../assets/jeans.jpg";
import Wash from "../assets/wash.png";
import Wash1 from "../assets/wash1.png";
import Iron from "../assets/iron.png";
import Iron1 from "../assets/iron1.png";
import Liquid1 from "../assets/liquid1.png";
import Fold from "../assets/fold.png";
import Liquid from "../assets/liquid.png";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Orderlist() {
  const [show, setShow] = useState(false);
  const [wash, setWash] = useState(false);
  const [iron, setIron] = useState(false);
  const [liquid, setLiquid] = useState(false);
  const history = useHistory();
  function cancelview() {
    console.log("Hello");
    history.push("/listview");
  }
  return (
    <div>
      <Orderheader />
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-1 main-head">
            <div class="row">
              <div class="col-lg-12">
                <i class="fa fa-home fontmain"></i>
              </div>
              <div class="col-lg-12">
                <i class="fa fa-plus-circle fontmain1"></i>
              </div>
              <div class="col-lg-12">
                <i class="fa fa-bars fontmain"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-11">
            <div class="row">
              <div class="col-lg-2">
                <p>Orders | 0</p>
              </div>
              <div class="col-lg-8"></div>
              <div class="col-lg-2">
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <table class="table maintable">
              <thead>
                <tr class="table-dark ">
                  <th>Product Types</th>
                  <th>Quantity </th>
                  <th>Wash Type</th>
                  <th>Price</th>
                  <th>Reset</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="row">
                      <div class="col-lg-2">
                        <img src={Shirt} alt="shirt" class="orderimg" />
                      </div>
                      <div class="col-lg-10">
                        <p>
                          It is a sequence of Latin words that, as they are
                          positioned
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" />
                  </td>
                  <td>
                    <div class="row">
                      <div class="col-lg-3">
                        <img
                          src={wash ? Wash1 : Wash}
                          onClick={() => setWash(!wash)}
                          alt="shirt"
                        />
                      </div>
                      <div class="col-lg-3">
                        <img
                          src={iron ? Iron1 : Iron}
                          onClick={() => setIron(!iron)}
                          alt="shirt"
                        />
                      </div>
                      <div class="col-lg-3">
                        <img src={Fold} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img
                          src={liquid ? Liquid1 : Liquid}
                          onClick={() => setLiquid(!liquid)}
                          alt="shirt"
                        />
                      </div>
                    </div>
                  </td>
                  <td>2400</td>
                  <td>
                    <button class="btn btn-primary">Reset</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row">
                      <div class="col-lg-2">
                        <img src={TShirt} alt="shirt" class="orderimg" />
                      </div>
                      <div class="col-lg-10">
                        <p>
                          It is a sequence of Latin words that, as they are
                          positioned
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" />
                  </td>
                  <td>
                    <div class="row">
                      <div class="col-lg-3">
                        <img src={Wash} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Iron} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Fold} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Liquid} alt="shirt" />
                      </div>
                    </div>
                  </td>
                  <td>2400</td>
                  <td>
                    <button class="btn btn-primary">Reset</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row">
                      <div class="col-lg-2">
                        <img src={Trousers} alt="shirt" class="orderimg" />
                      </div>
                      <div class="col-lg-10">
                        <p>
                          It is a sequence of Latin words that, as they are
                          positioned
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" />
                  </td>
                  <td>
                    <div class="row">
                      <div class="col-lg-3">
                        <img src={Wash} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Iron} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Fold} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Liquid} alt="shirt" />
                      </div>
                    </div>
                  </td>
                  <td>2400</td>
                  <td>
                    <button class="btn btn-primary">Reset</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row">
                      <div class="col-lg-2">
                        <img src={Jeans} alt="shirt" class="orderimg" />
                      </div>
                      <div class="col-lg-10">
                        <p>
                          It is a sequence of Latin words that, as they are
                          positioned
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" />
                  </td>
                  <td>
                    <div class="row">
                      <div class="col-lg-3">
                        <img src={Wash} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Iron} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Fold} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Liquid} alt="shirt" />
                      </div>
                    </div>
                  </td>
                  <td>2400</td>
                  <td>
                    <button class="btn btn-primary">Reset</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row">
                      <div class="col-lg-2">
                        <img src={Shirt} alt="shirt" class="orderimg" />
                      </div>
                      <div class="col-lg-10">
                        <p>
                          It is a sequence of Latin words that, as they are
                          positioned
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" />
                  </td>
                  <td>
                    <div class="row">
                      <div class="col-lg-3">
                        <img src={Wash} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Iron} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Fold} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Liquid} alt="shirt" />
                      </div>
                    </div>
                  </td>
                  <td>2400</td>
                  <td>
                    <button class="btn btn-primary">Reset</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row">
                      <div class="col-lg-2">
                        <img src={TShirt} alt="shirt" class="orderimg" />
                      </div>
                      <div class="col-lg-10">
                        <p>
                          It is a sequence of Latin words that, as they are
                          positioned
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" />
                  </td>
                  <td>
                    <div class="row">
                      <div class="col-lg-3">
                        <img src={Wash} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Iron} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Fold} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Liquid} alt="shirt" />
                      </div>
                    </div>
                  </td>
                  <td>2400</td>
                  <td>
                    <button class="btn btn-primary">Reset</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row">
                      <div class="col-lg-2">
                        <img src={Trousers} alt="shirt" class="orderimg" />
                      </div>
                      <div class="col-lg-10">
                        <p>
                          It is a sequence of Latin words that, as they are
                          positioned
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" />
                  </td>
                  <td>
                    <div class="row">
                      <div class="col-lg-3">
                        <img src={Wash} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Iron} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Fold} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Liquid} alt="shirt" />
                      </div>
                    </div>
                  </td>
                  <td>2400</td>
                  <td>
                    <button class="btn btn-primary">Reset</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row">
                      <div class="col-lg-2">
                        <img src={Jeans} alt="shirt" class="orderimg" />
                      </div>
                      <div class="col-lg-10">
                        <p>
                          It is a sequence of Latin words that, as they are
                          positioned
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input type="text" class="form-control" />
                  </td>
                  <td>
                    <div class="row">
                      <div class="col-lg-3">
                        <img src={Wash} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Iron} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Fold} alt="shirt" />
                      </div>
                      <div class="col-lg-3">
                        <img src={Liquid} alt="shirt" />
                      </div>
                    </div>
                  </td>
                  <td>2400</td>
                  <td>
                    <button class="btn btn-primary">Reset</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="but-com">
              <button
                class="btn btn btn-outline-primary cancel"
                onClick={cancelview}
              >
                Cancel
              </button>
              <button
                class="btn btn btn-primary proceed"
                onClick={() => setShow(true)}
              >
                proceed
              </button>
            </div>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  summary
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="confirm_page">
                  <div class="row mainadd">
                    <div class="col-lg-4">
                      <select data-bs-display="static" aria-expanded="false">
                        <option disabled selected value>
                          {" "}
                          Store Location{" "}
                        </option>
                        <option>Hyderabad</option>
                        <option>Banglore</option>
                        <option>Guntur</option>
                        <option>Delhi</option>
                        <option>Gujarat</option>
                      </select>
                    </div>
                    <div class="col-lg-4">Store Address</div>
                    <div class="col-lg-4">Phone</div>
                  </div>
                  <div>
                    <small>
                      <b>Order Details</b>
                    </small>
                  </div>
                  <table class="table table-sm">
                    <tbody>
                      <tr>
                        <td>Shirts</td>
                        <td>Washing</td>
                        <td>4x10</td>
                        <td>120</td>
                      </tr>
                      <tr>
                        <td>Joggers</td>
                        <td>Pressing</td>
                        <td>3x15</td>
                        <td>150</td>
                      </tr>
                      <tr>
                        <td>Jeans</td>
                        <td>Folding</td>
                        <td>4x20</td>
                        <td>140</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="subtotal">
                    <table class="table table-sm">
                      <tbody>
                        <tr>
                          <td>Sub total</td>
                          <td>250</td>
                        </tr>
                        <tr>
                          <td>Pickup Charges</td>
                          <td>80</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="total">
                    <table class="table table-sm">
                      <tbody>
                        <tr className="bg-primary">
                          <td></td>
                          <td>
                            <table className="menu">
                              <tr>
                                <td>Total: </td>

                                <td> 350 </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <br />
                  <div class="card-columns col p-1 m-1 row-cols-lg-2">
                    <div class="card bg-Basic">
                      <div class="card-body text-center">
                        <h6 class="card-title">Home</h6>
                        <p class="card-text">
                          #4-132, A-Colony, Jamshedpur, Near SBI
                        </p>
                      </div>
                    </div>
                    <div class="card bg-Basic">
                      <div class="card-body text-center">
                        <h6 class="card-title">Home</h6>
                        <p class="card-text">
                          #4-1/2A, B-Colony, Hyderabad, Opposite Green valley
                        </p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="confirm" id="button">
                    <button type="button" class="btn btn-primary">
                      Confirm
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
            <div class="createbtn"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Orderlist;
