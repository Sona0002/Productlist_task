import axios from 'axios';
import React from 'react';  
import { useState } from 'react';

function create() {

    const[formdata,setFormdata] = useState({})

    const handleinput = (e) => {
        const{name,value} = e.target
        setFormdata({
            ...formdata,
            [name]:value,
        })
    }


    const handlesubmit= async(e)=>{
        e.preventdefault()
        console.log('entered value is', formdata)

        try {
            const response = await axios.post ('http://127.0.0.1:8000/'),
            method:'POST',
            headers:{
                'cont-type': 'application/json',
            }
        }
        if (response.status == 200){
            alert('list created succesfulyy')
        }

    }

    }



    return(
        <>

        <h1>Product List</h1>
        <form onSubmit={handlesubmit}>
<div>

    <label>Product name</label>
    <input type='text' name='name'></input>

        <label>Product name</label>
    <input type='number' name='price'></input>

        <label>Product name</label>
    <input type='text' name='description'></input>

        <label>Product name</label>
    <input type='time' name='created_at'></input>


    <button className='btn-btn-primary' type='submit'>create</button>
    
</div>

        </form>

</>

    )




}


export default create;