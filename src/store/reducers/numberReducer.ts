const initialNumber = {randomNumbers:[]};

const reducerNumber = (state = initialNumber , action:any) =>{
    switch (action.type) {
        case "RANDOM": 
            return {...state , randomNumbers:[...state.randomNumbers,action.payload]};
        default:
            return state;
    }
}

export const addRandomNumber = () => {
    return {
      type: "RANDOM",
      payload: Math.floor(Math.random() * 100)
    };
};

export default reducerNumber;