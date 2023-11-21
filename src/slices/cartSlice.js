import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        //function to remove items fromm cart
        removeCart:(state,action)=>{
        return state.filter(item=>item.id!=action.payload)
        },
        //function to remove all item from cart
        removeallitem:(state)=>{
        return state=[]
        }

        

    }
})
export const {addToCart,removeCart,removeallitem}=cartSlice.actions
export default cartSlice.reducer

