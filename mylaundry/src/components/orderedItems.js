import React from "react";

// const { order_id, phone, address, status, total_price } = res.body;

function OrderedItems({ order_id, phone, address, status, total_price }) {
  return (
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
        <i class="fa fa-eye"></i>
      </td>
    </tr>
  );
}

export default OrderedItems;
