import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductDetail() {
  const { productId } = useParams();
  const productList = useSelector((state) => state.products);
  const product = productList.find(p => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const priceWithoutSymbol = product.price.replace('฿', '').trim();

  return (
    <div className='container mx-auto p-8 '>
      <div className='text-2xl mb-4 text-center border'>
      <h2 className=''>{product.name}</h2>
      <p className='font-bold text-blue-500'>ราคา {priceWithoutSymbol} บาท</p>

      <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
