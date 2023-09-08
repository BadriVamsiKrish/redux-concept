
import { createSlice,configureStore} from '@reduxjs/toolkit';
const initialCounter={counter:0 ,showcounter:true};
const conterSlice = createSlice({
  name:'counter',
  initialState:initialCounter,
  reducers:{
    increment(state,action){
      state.counter=state.counter+action.payload;
    },
    decrement(state,action){
      state.counter=state.counter-action.payload;
    },
    toggle(state){
      state.showcounter=!state.showcounter;
    }
  }
});

const initialAuthState  = {
  isAuthenticated:false,
};

const authSlice = createSlice({
  name:'auth',
  initialState:initialAuthState,
  reducers:{
    login(state){
     state.isAuthenticated=true; 
    },
  logout(state){
    state.isAuthenticated=false; 
   },
 }
}
);

const store = configureStore({
  reducer:{counter:conterSlice.reducer,auth:authSlice.reducer}
});
export const counterActions= conterSlice.actions;
export const authActions=authSlice.actions;
export default store;

