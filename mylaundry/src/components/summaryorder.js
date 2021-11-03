import React from "react";
import { useHistory } from "react-router-dom";
import Summaryfinal from "./summaryfinal";

function Summaryorder(props) {
  console.log("summaryorder", props.orderedDate);
  const history = useHistory();
  function confirmlist() {
    console.log("Hello");
    history.push("/listview");
  }
  return (
    <div>
      <p class="order-head">Order Details</p>
      {props.orderedDate.length > 0 &&
        props.orderedDate.map(
          (orderedItem) =>
            orderedItem.value.quantity > 0 &&
            (orderedItem.value.wash ||
              orderedItem.value.fold ||
              orderedItem.value.press ||
              orderedItem.value.pack) && (
              <Summaryfinal
                name={orderedItem.name}
                type={orderedItem.value}
                cost={orderedItem.value.price}
              />
            )
        )}

      <div class="rate-head">sub Total : 450</div>

      <div class="rate-head">Pick Up Charges : 90</div>

      <div class="row totalcss">
        <div class="col-lg-4"></div>
        <div class="col-lg-4"></div>
        <div class="col-lg-4 ">Total : Rs560</div>
      </div>
      <p>Address</p>
      <button class="btn btn-primary my-3 btncon" onClick={confirmlist}>
        Confirm
      </button>
    </div>
  );
}

export default Summaryorder;
