import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state) => {
            state.push({name:"Akshay Shinde"});
            state.push({name:"Ashish Shinde"});
        }
    }
});

export default slice.reducer;

export const{getUser} = slice.actions;