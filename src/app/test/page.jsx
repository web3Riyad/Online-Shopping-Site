"use client"

import React from 'react';
import { useState } from 'react';

const Test = () => {
    const [count, setcount] = useState(0);
    return (
        <div>
            <h1>Shopping Cart Update</h1>
            <p>Items : {count}</p>

            <button className="btn btn-error" onClick={()=> setcount(count+1)} >Add to cart</button>
        </div>
    );
};

export default Test;