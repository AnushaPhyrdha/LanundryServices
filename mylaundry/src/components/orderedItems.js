import React, { useState } from "react";
// import Summary from "./summary";
import { Modal } from "react-bootstrap";

// const { order_id, phone, address, status, total_price } = res.body;

function OrderedItems({ order_id, phone, address, status, total_price }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <tr>
        <td>{order_id}</td>
        <td>01Nov2021</td>
        <td>Heaven</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>18</td>
        <td>{total_price}</td>
        <td>{status}</td>
        <td>Cancel Order</td>
        <td>
          <i class="fa fa-eye" onClick={() => setShow(true)}></i>
        </td>
      </tr>
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
          <div className="confirm_page">
            <div class="row mainadd">
              <div class="col-lg-4">
                <h6>Store Location</h6>
                <p>Jp Nagar</p>
              </div>
              <div class="col-lg-4">
                <h6>Store Address</h6>
                <p>Near Phone Booth, 10th Road</p>
              </div>
              <div class="col-lg-4">
                <h6>Phone</h6>
                <p>+91 9999999999</p>
              </div>
            </div>
          </div>

          {/* table */}
          <div>
            <small>
              <p>Order Details</p>
            </small>
          </div>
          <table class="table table-sm">
            <tbody>
              <tr>
                <td>Shirts</td>
                <td>Washing</td>
                <td>4 x 10 =</td>
                <td>40</td>
              </tr>
              <tr>
                <td>Joggers</td>
                <td>Pressing</td>
                <td>3 x 15 =</td>
                <td>45</td>
              </tr>
              <tr>
                <td>Jeans</td>
                <td>Folding</td>
                <td>4 x 20 =</td>
                <td>80</td>
              </tr>
            </tbody>
          </table>
          <div className="subtotal">
            <table class="table table-sm">
              <tbody>
                <tr>
                  <td>Sub total</td>
                  <td>165</td>
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
                <tr>
                  <td className=""></td>
                  <td>
                    <table className="strip">
                      <tr>
                        <td>Total: </td>
                        <td>245</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />

          <div>
            <h6 className="add">Address</h6>
          </div>
          <div className="address-box">
            <h5 className="address-H">Home</h5>
            <p className="address-F">001/ 893, its my address. city</p>
          </div>
          {/* </div> */}

          <br />
          <br />
          <div className="confirm" id="button">
            <button type="button" class="btn btn-danger">
              Cancel order
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrderedItems;
