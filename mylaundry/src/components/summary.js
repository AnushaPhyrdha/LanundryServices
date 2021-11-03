import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import "./summary.css";
import "./orderlist.css";

function Summary() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <h2>Ashutosh</h2>
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
          {/* <div class="card-columns col p-1 m-1 row-cols-lg-2">
              <div class="card bg-Basic">
                <div class="card-body text-center">
                  <h6 class="card-title">Home</h6>
                  <p class="card-text">
                    #4-132, A-Colony, Jamshedpur, Near SBI
                  </p>
                </div>
              </div> */}

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
            <button type="button" class="btn btn-primary">
              Confirm
            </button>
          </div>
          {/* <table>
            <tr className="trbody">
              <td>Shirt</td>
              <td>Washing, Ironing</td>
              <td>5 x 20 = </td>
              <td>100</td>
            </tr>
            <tr>
              <td>Jeans</td>
              <td>Washing, Ironing</td>
              <td>5 x 30 = </td>
              <td>150</td>
            </tr>
            <tr>
              <td>Joggers</td>
              <td>Chemical Wash</td>
              <td>2 x 100 = </td>
              <td>200</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Sub Totle: </td>
              <td>450</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Pickup Charge: </td>
              <td>90</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Totle: </td>
              <td>Rs 560</td>
            </tr>
          </table> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Summary;
