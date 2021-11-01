import React, { useState } from "react";
import Footer from "./footer";
import Orderheader from "./orderheader";
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
                <div class="row mainadd">
                  <div class="col-lg-4">Store Location</div>
                  <div class="col-lg-4">Store Address</div>
                  <div class="col-lg-4">Phone</div>
                </div>
                <p>
                  Ipsum molestiae natus adipisci modi eligendi? Debitis amet
                  quae unde commodi aspernatur enim, consectetur. Cumque
                  deleniti temporibus ipsam atque a dolores quisquam quisquam
                  adipisci possimus laboriosam. Quibusdam facilis doloribus
                  debitis! Sit quasi quod accusamus eos quod. Ab quos
                  consequuntur eaque quo rem! Mollitia reiciendis porro quo
                  magni incidunt dolore amet atque facilis ipsum deleniti rem!
                </p>
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
