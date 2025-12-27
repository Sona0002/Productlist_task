import axios from 'axios';
import React, { useEffect } from 'react';  
import { useState } from 'react';



function listproduct(){


    const [products,setProducts] = useState([])

    useEffect(()=>

        try{

            fetch('http://127.0.0.1:8000/')
            response.json()

        }



        


    )



}

export default listproduct;