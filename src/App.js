import React from 'react';
import ProductList from './components/ProductList';
import Cart from './Cart';
import { CartProvider } from './CartContext.js';

function App() {
  return (
    <CartProvider>
      <div className="App bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white py-4">
          <h1 className="text-2xl font-bold text-center">E-Ticaret Projesi</h1>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              <ProductList />
            </div>
            <div className="md:w-1/4">
              <Cart />
            </div>
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;