import { createAction } from "@ngrx/store";


export const increment = createAction('[counter component] increment');  // create the unique name 
export const decrement = createAction('[counter component] decrement');  // create the unique name 
export const reset = createAction('[counter component] reset');  // create the unique name 

