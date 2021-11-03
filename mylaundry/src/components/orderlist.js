import React, { useState } from "react";
import Footer from "./footer";
import Orderheader from "./orderheader";
import "./mainhome.css";
import "font-awesome/css/font-awesome.min.css";
import { Modal } from "react-bootstrap";
import Ordercomponent from "./ordercomponent";
import Summaryorder from "./summaryorder";
const order = { orderId: "orderId", userId: "userId", details: new Map() };
let orderedDate = [];
function Orderlist() {
  const [show, setShow] = useState(false);

  function handleCallback(props) {
    order.details.set(props.name, props.value);
    orderedDate = [...order.details].map(([name, value]) => ({ name, value }));
    console.log("orderedData", orderedDate);
    return;
  }

  const orderComponents = [
    {
      image: "shirt.jpg",
      description:
        "It is a sequence of Latin words that, as they are positioned",
      name: "Shirts",
    },
    {
      image: "tshirt.jpg",
      description:
        "It is a sequence of Latin words that, as they are positioned",
      name: "Tshirts",
    },
    {
      image: "jeans.jpg",
      description:
        "It is a sequence of Latin words that, as they are positioned",
      name: "Jeans",
    },
    {
      image: "trousers.jpg",

      description:
        "It is a sequence of Latin words that, as they are positioned",
      name: "Trousers",
    },
  ];
  // const [wash, setWash] = useState(false);
  // const [iron, setIron] = useState(false);
  // const [liquid, setLiquid] = useState(false);

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
                    name={orderItem.name}
                    handleClick={handleCallback}
                  />
                ))}
              </tbody>
            </table>
            <div class="but-com">
              <button class="btn btn btn-outline-primary cancel">Cancel</button>
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
                  Summary
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div class="row mainadd">
                  <div class="col-lg-4">Store Location</div>
                  <div class="col-lg-4">Store Address</div>
                  <div class="col-lg-4">Phone</div>
                  <div></div>
                </div>
                <Summaryorder orderedDate={orderedDate} />
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
