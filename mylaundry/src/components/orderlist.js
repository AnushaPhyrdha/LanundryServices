import React, { useState } from "react";
import Footer from "./footer";
import Orderheader from "./orderheader";
import "./mainhome.css";
import "font-awesome/css/font-awesome.min.css";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Ordercomponent from "./ordercomponent";

function Orderlist() {
  const [show, setShow] = useState(false);
  const orderComponents = [
    {
      image: "shirt.jpg",
      description:
        "It is a sequence of Latin words that, as they are positioned",
    },
    {
      image: "tshirt.jpg",
      description:
        "It is a sequence of Latin words that, as they are positioned",
    },
    {
      image: "jeans.jpg",
      description:
        "It is a sequence of Latin words that, as they are positioned",
    },
    {
      image: "trousers.jpg",
      description:
        "It is a sequence of Latin words that, as they are positioned",
    },
  ];
  // const [wash, setWash] = useState(false);
  // const [iron, setIron] = useState(false);
  // const [liquid, setLiquid] = useState(false);
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
                {orderComponents.map((orderItem) => (
                  <Ordercomponent
                    image={orderItem.image}
                    description={orderItem.description}
                  />
                ))}
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
