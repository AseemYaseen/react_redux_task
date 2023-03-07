import {createStore} from 'redux'

const reducerFn = (state = {counter : 0}, action) => { // reducer take two parameters the state and what action  
    // Synchronous Function 
    // We should not mutate the original state
    if(action.type === "INC"){
        return {counter: state.counter +1}
    }
    if(action.type === "DEC"){
        return {counter: state.counter -1}
    }
    if(action.type === "ADD"){
        return {counter: state.counter + action.tt}
    }

    // switch(action){
    //     case (action.type === "INC") :
    //         return {state: state.counter++}

    //      case (action.type === "DEC") :
    //             return {counter: state.counter +1}
    
    //      default :return state

    // }

    
    
    return state;
}


const store = createStore(reducerFn)

export default store