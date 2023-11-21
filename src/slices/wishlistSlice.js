import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"


const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],//wishlist may have more than one item
    reducers:{

//action
//function to add ini=to wishlist aray
addToWishlist:(state,action)=>{
    state.push(action.payload)
}, 
    removeitem:(state,action)=>{
   return state.filter(item=>item.id!=action.payload)
    }

}
})
export const {addToWishlist,removeitem}=wishlistSlice.actions

export default wishlistSlice.reducer
