import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCounterState =(state:AppState)=>state.counter  // all counter state


// only count state
export const selectCount = createSelector(
   selectCounterState,
   (state)=>{
    console.log('Counter state:', state);
    return state.count}
)