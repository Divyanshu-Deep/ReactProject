import React from "react";
import AppBar from './Navbar'
import { Table, Button } from "react-bootstrap";
const Admin = () => {
  const [data] = React.useState([
    {
      id: "1",
      product: "Product A",
      Category: "Men",
    },
    {
      id: "2",
      product: "Product B",
      Category: "Women",
    },
    {
      id: "3",
      product: "Product C",
      Category: "Children",
    },
    {
      id: "4",
      product: "Product D",
      Category: "Women",
    },
  ]);
  return (
    <>
    <AppBar />
      <div>
        <h5 className="text-center mt-4">Admin Panel</h5>
      </div>
      <div className="container mb-2"><Button >Add</Button></div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Edit Data</th>
            <th>Delete Data</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item)=>(
              <tr>
              <td>{item.id}</td>
              <td>{item.product}</td>
              <td>{item.Category}</td>
              <td>
                <Button variant="success">Edit</Button>
              </td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
 
    </>
  );
};

export default Admin;
