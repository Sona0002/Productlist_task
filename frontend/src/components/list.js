import axios from 'axios';
import React, { useEffect, useState } from 'react';

function List() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 

  return (
    <>
      <h2>Products</h2>

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button className="btn btn-success">Update</button>&nbsp;
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
