import {combineReducers} from 'redux';
import {Reducer} from './Reduce'

const RealReducer=combineReducers({
    one:Reducer
})

export default RealReducer;