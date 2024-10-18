import React from 'react';

const Navbar = ({ cartCount, openCart }) => {
    return (
        <div>
             <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
    <h1 className="text-lg">My Store</h1>
    <button onClick={openCart} className="bg-transparent border-none cursor-pointer">
      Cart ({cartCount})
    </button>
  </nav>
        </div>
    );
};

export default Navbar;