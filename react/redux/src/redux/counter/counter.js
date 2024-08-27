

let initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "counter/INCREASE" : {
            return {count: state.count+1}
        }

        case "counter/DECREASE" : {
            return {count: state.count-1}
        }

        default:
            return state
    }
}

export const increase = () => ({type:"counter/INCREASE"})
export const decrease = () => ({type:"counter/DECREASE"})















