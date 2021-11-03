import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./summary.css";

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
          <div class="row mainadd">
            <div class="col-lg-4">Store Location</div>
            <div class="col-lg-4">Store Address</div>
            <div class="col-lg-4">Phone</div>
          </div>
          <div className="flowstatus">flowbar appears here</div>
          <p className="order-details">Order Details</p>
          <table>
            <tr>
              <td class="T1">Shirt</td>
              <td class="T2">Washing, Ironing</td>
              <td class="T3">5 x 20 = </td>
              <td class="T4">100</td>
            </tr>
            <tr>
              <td class="T5">Jeans</td>
              <td class="T6">Washing, Ironing</td>
              <td class="T7">5 x 30 = </td>
              <td class="T8">150</td>
            </tr>
            <tr>
              <td class="T9">Joggers</td>
              <td class="T10">Chemical Wash</td>
              <td class="T12">200</td>
              <td class="T11">2 x 100 = </td>
            </tr>
          </table>
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
          <div>
            <h6 className="add">Address</h6>
          </div>
          <div className="address-box">
            <h5 className="address-home">Home</h5>
            <p className="address-text">001/ 893, its my address. city</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Summary;
