import React from 'react';

const ShopHeader = ({itemCount}) => {
    return (
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Tech Shop</h1>

        <p className="mt-2">Cart items: {itemCount}</p>
      </header>
    );
};

export default ShopHeader;