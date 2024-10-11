// // pages/Product.jsx
// import { useParams } from 'react-router-dom';

// function Product() {
//   // รับค่าจาก Dynamic Route ด้วย useParams
//   const { productId } = useParams();

//   return (
//     <div>
//       <h2>Product Page</h2>
//       <p>Product ID: {productId}</p>
//     </div>
//   );
// }

// export default Product;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, removeProduct } from "/src/features/productSlice.jsx"; /// Inside SRC

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  // State to store input values
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleAddProduct = () => {
    if (name && price && description) {
      dispatch(
        addProduct({
          id: productList.length + 1,
          name,
          price: `฿${price}`, // เพิ่ม ฿ อัตโนมัติ
          description,
        })
      );
      // ล้าง input
      setName("");
      setPrice("");
      setDescription("");
    }
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };


  return (
    <div className="container mx-auto p-8">
  <div className="container mx-auto p-8 border">
    <h3 className="text-2xl font-bold mb-4 text-center">เพิ่มรายการสินค้า</h3>
    <div className="space-y-4">
      <input
        type="text"
        placeholder="ชื่อสินค้า"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="ราคา (บาท)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="คำอธิบายสินค้า"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-center">
  <button
    onClick={handleAddProduct}
    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
  >
    เพิ่มสินค้านี้
  </button>
</div>

    </div>

    <h2 className="text-xl font-semibold mt-8 mb-4">รายการสินค้าที่มี</h2>
    <ul className="space-y-4">
      {productList.length > 0 ? (
        productList.map((product) => (
          <li
            key={product.id}
            className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
          >
            <Link
  to={`/product/${product.id}`}
  className="text-blue-500 hover:underline relative group"
>
  {product.name} - {product.price}
  <span className="hidden group-hover:flex absolute bg-gray-700 text-white text-sm px-2 py-1 rounded-lg ml-2">
    รายละเอียดเพิ่มเติม
  </span>
</Link>
            <button
              onClick={() => handleRemoveProduct(product.id)}
              className="text-red-500 hover:text-red-600"
            >
              ลบสินค้า
            </button>
          </li>
        ))
      ) : (
        <p className="text-gray-500">ไม่มีสินค้าให้แสดง</p>
      )}
    </ul>
  </div>
</div>

  );
}

export default Products;
