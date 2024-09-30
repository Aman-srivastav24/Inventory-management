import { createSlice , PayloadAction } from "@reduxjs/toolkit";
export interface IntialStateTypes {
    isSidebarCollaspes:boolean,
    isDarkMode:boolean,

}

const initialState: IntialStateTypes = {
    isSidebarCollaspes: false,
    isDarkMode:false
}

export const globalSlice = createSlice({
    name:'global',
    initialState,
    reducers:{
        setIsSidebarCollasped:(state,action:PayloadAction<boolean>)=>{
            state.isSidebarCollaspes = action.payload;
        },
        setIsDarkMode:(state,action:PayloadAction<boolean>)=>{
            state.isDarkMode = action.payload;
        },
        
    }
})

export const {setIsSidebarCollasped,setIsDarkMode} = globalSlice.actions;
export default globalSlice.reducer;