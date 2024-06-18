const initialUser:any = [
    {
        id : 1,
        name : "Ngô Quang Anh",
        sex : "Male",
        date : "19/03/2003",
        address : "Hoàng Mai"
    }
]

const reducerUser = (state=initialUser , action:any) => {
    switch(action.type){
        case "ADD":
            return [...state , action.payload];
        default : 
            return state;
    }
}

export default reducerUser;