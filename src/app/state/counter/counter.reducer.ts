import { createReducer, on } from "@ngrx/store"
import { decrement, increment, reset } from "./counter.actions"

export interface CounterState{
 count:number
}

//intilise my state 

export const initialState:CounterState = {
  count:10
}

export const counterReducer = createReducer(
    initialState,
    //event
    on(increment,(state)=>({...state,count:state.count+1})),
    on(decrement,(state)=>({...state,count:state.count-1})),
    on(reset,(state)=>({...state,count:0}))
)