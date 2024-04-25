import React from 'react';

const ProductList = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Monitor ',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Printers',
      image: 'https://images.pexels.com/photos/9574509/pexels-photo-9574509.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: 3,
        name: 'Smartwatches',
        image: 'https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=600',
      },

      {
        id: 4,
        name: 'Speakers',
        image: 'https://images.pexels.com/photos/1034651/pexels-photo-1034651.jpeg?auto=compress&cs=tinysrgb&w=600',
      },


      {
        id: 5,
        name: 'Mobiles',
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
      },

    

  

  ];

  return (
    <section className='bg-gray-100 py-20 px-8'>
      <div className=' mx-auto container'>
        <h2 className='text-xl font-poppins font-semibold mb-8'>Our Best Products</h2>
        <div className='flex flex-wrap gap-4 justify-between items-center'>
        
          {products.map(product => (
            <div key={product.id} className='w-56  p-2 border-2 bg-white border-gray-200 cursor-pointer hover:scale-110 transition duration-300'>
              <img className='w-full h-40 ' src={product.image} alt={product.name} />
              <p className='text-lg text-center font-poppins'>{product.name}</p>
              <button className='text-sm text-center font-poppins font-semibold mx-auto flex justify-center'>Shop Now!</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
