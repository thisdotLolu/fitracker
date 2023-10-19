// First step - inside component
const [state, dispatch ] = useReducer(themeReducer, {
    color:'blue'
})



//outside the component
// reducer function
const themeReducer =(state,action)=>{
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state,color:action.payload}    
        default:
            return state;
    }
}



// dispatch- could be attached to a click handler
const changeColor=(color)=>{
    dispatch({type:'CHANGE_COLOR', payload:color})
}





//useState from scratch
//closure

function add(){
    let num = 1;
    return (newNum)=>{
        num = num + newNum;
        return num;
    } 
}


let addNum = add()
console.log(addNum(2))//changes the value of num
console.log(addNum(2))
console.log(addNum(2))





const React=(
    function(){
        function useState(initVal){
            let state = initVal
        }
    } 
)()


























