let storage = eval(localStorage.getItem('darkMode'))
let initState; 
if(storage){
    initState = storage
}else{
    initState = false;
}

const reducer = (state=initState, action)=>{
    switch(action.type){
        case "TOGGLE_MODE": return !state
        default: return state
    }
}

export default reducer