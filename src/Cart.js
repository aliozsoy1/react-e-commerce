import React from 'react';
import { useCart } from './CartContext.js';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Sepet</h2>
      <div className='bg-white p-4 rounded-lg shadow-md'>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center mb-4 border-b pb-2">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-16 h-16 object-contain mr-4"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm mt-1"
                >
                  Kaldır
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-bold text-xl">Toplam: ${total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200 w-full"
            >
              Sepeti Temizle
            </button>
          </div>
        </>
      )}
      </div>
    </div>
  );
}

export default Cart;