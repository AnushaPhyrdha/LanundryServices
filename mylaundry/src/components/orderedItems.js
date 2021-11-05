import React from "react";

// const { order_id, phone, address, status, total_price } = res.body;

function OrderedItems({
  order_id,
  phone,
  address,
  status,
  total_price,
  total_quantity,
  createdAt,
}) {
  return (
    <tr>
      <td>{order_id}</td>
      <td>{createdAt}</td>
      <td>Heaven</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>{total_quantity}</td>
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
