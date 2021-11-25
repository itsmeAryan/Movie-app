import * as diff from './typeAction';
import axios from 'axios'
// for getting our movies data
export const  MovieData=()=>async dispatch=>{
    dispatch({
        type:diff.data_loading
    })
try {
    const {data}=await axios.get("http://localhost:3001/api");
    dispatch({
        type:diff.data_sucess,
        payload:data
    })
    
} catch (error) {
    dispatch({
        type:diff.Data_error,
        payload:error
    })
    
}
}