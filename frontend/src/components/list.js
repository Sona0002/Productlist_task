import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './List.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function List() {
  const [data, setData] = useState([]);
  const [update,setUpdate] = useState({});

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


//delete
    const handleDelete=((id)=>{
    fetch(`http://127.0.0.1:8000/delete/${id}/`,             //also we can pass id like above ${id}
    {method: 'DELETE'})
    .then(()=>{
      console.log("deleted")
    })
  })


   //update
  


  const updateDetails = (id)=>{
    fetch(`http://127.0.0.1:8000/detail/${id}`)
    .then(response=>response.json())
    .then(res=>setUpdate(res))
  }

  const handleInputChange=(event,fieldName)=>{
    const value = event.target.value;

    setUpdate((prevUpdate)=>({
        ...prevUpdate,
        [fieldName] : value,
    }))
  }

  const handleUpdate = async(e,id)=>{
    e.preventDefault();
    const requestData = {
        id : update.id,
        name : update.name,
        price : update.price,
        description : update.description,
      

    };
    const response = await axios.put(`http://127.0.0.1:8000/update/${id}/`,requestData,{
        headers:{
            'Content-Type':'application/json'
        },
    });

    alert('updated successfuly')
  }


  return (
    <div className="list-container">
      <h2 className="title">Products</h2>

      <div className="table-responsive">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td className="fw-bold">{item.name}</td>
                <td>₹ {item.price}</td>
                <td>{item.description}</td>
<td>
  <div className="action-buttons">
    <button className="btn btn-update" onClick={()=>{updateDetails(item.id)}} data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
    <button className="btn btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
  </div>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Data</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
       <div className='container'>
            <form onSubmit={(e)=>handleUpdate(e,update.id)}>
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' className='form-control' value={update.name} onChange={(event)=>handleInputChange(event,'name')} />
                </div>

                <div className='form-group'>
                <label>Price</label>
                <input type='text' className='form-control' value={update.price} onChange={(event)=>handleInputChange(event,'price')} />
                </div>

                <div className='form-group'>
                <label>Description</label>
                <input type='text' className='form-control' value={update.decsription} onChange={(event)=>handleInputChange(event,'description')} />
                </div>

               



               

                <button type="submit" class="btn btn-primary">Update</button>
            </form>
       </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
        </div>
    </div>
    </div>
    </div>
    </div>




  );
}

export default List;
