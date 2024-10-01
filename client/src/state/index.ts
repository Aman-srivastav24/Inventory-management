import { createSlice , PayloadAction } from "@reduxjs/toolkit";
export interface IntialStateTypes {
    isSidebarCollasped:boolean,
    isDarkMode:boolean,

}

const initialState: IntialStateTypes = {
    isSidebarCollasped: false,
    isDarkMode:false
}

export const globalSlice = createSlice({
    name:'global',
    initialState,
    reducers:{
        setIsSidebarCollasped:(state,action:PayloadAction<boolean>)=>{
            state.isSidebarCollasped = action.payload;
        },
        setIsDarkMode:(state,action:PayloadAction<boolean>)=>{
            state.isDarkMode = action.payload;
        },
        
    }
})

export const {setIsSidebarCollasped,setIsDarkMode} = globalSlice.actions;
export default globalSlice.reducer;