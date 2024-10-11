import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'ขนมปังเยาวราช', price: `฿20`, description: 'นุ่มอร่อยเข้าถึงใจ คิดถึงคนไกลต้องลอง' },
  { id: 2, name: 'น้ำเต้าหู้กาดหลวง', price: `฿7`, description: 'หอมอร่อย ดื่มบ่อยๆ เบาหวานเรียกหา' },
  { id: 3, name: 'หมูปิ้งนมสด', price: `฿6`, description: 'สด ใหม่ หอมอร่อย ไม่ซ้ำ จำสูตรไม่ได้' },
];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload); // Add the new product to the state
    },
    removeProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload); // Remove product by ID
    },
  },
});

// Export the action creators
export const { addProduct, removeProduct } = productSlice.actions;

// Export the reducer
export default productSlice.reducer;
