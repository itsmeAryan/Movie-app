import * as diff from '../Action/typeAction'

const initial={
    movies:[],
    loading:false,
    err:""
}

export const Reducer=(state=initial,action)=>{
    const {type,payload}=action;
    switch (type) {
        case diff.data_loading:return{
            ...state,
            loading:true
        }
case diff.data_sucess:return{
    ...state,
    movies:[...payload],
    loading:false
}         
case diff.Data_error:return{
    ...state,
    loading:false,
    err:payload
}
    
        default:return state;
    }
}