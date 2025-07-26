import React from 'react';

function CourierOrders({ orders }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Address</th>
            <th>Weight</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.sender}</td>
              <td>{order.receiver}</td>
              <td>{order.address}</td>
              <td>{order.weight}</td>
              <td>
                <span className={status ${order.status.toLowerCase()}}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourierOrders;