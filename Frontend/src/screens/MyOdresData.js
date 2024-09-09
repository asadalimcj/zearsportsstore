import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function MyOrdersData() {
  const [ordersByDate, setOrdersByDate] = useState({});
  const email = localStorage.getItem("email");

  useEffect(() => {
    fetch("http://localhost:8500/api/myorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          // Group orders by date
          const groupedOrders = data.data.reduce((acc, order) => {
            const date = new Date(order.date).toLocaleDateString();
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(...order.data);
            return acc;
          }, {});
          setOrdersByDate(groupedOrders);
        }
      })
      .catch((error) => console.error("Error fetching orders:", error));
  }, [email]);

  return (
    <Container>
      <h1 style={{color:'whitesmoke', textAlign:'center'}}>My Orders</h1>
      {Object.keys(ordersByDate).length > 0 ? (
        Object.keys(ordersByDate).map((date) => (
          <div key={date}>
            <h2 style={{color:'whitesmoke'}}>{date}</h2>
            <Row>
              {ordersByDate[date].map((order, index) => (
                <Col md={4} key={index} className="mb-3">
                  <Card>
                    {/* <Card.Img variant="top" src={order.img} /> */}
                    <Card.Body>
                      <Card.Title>{order.name}</Card.Title>
                      <Card.Text>
                        Quantity: {order.qty}
                        <br />
                        Size: {order.size}
                        <br />
                        Price: ${order.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </Container>
  );
}

export default MyOrdersData;
