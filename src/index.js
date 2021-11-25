import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './REdux/store';
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>

<App/>
{/* <Test/> */}
</Provider>


,
    document.getElementById("root")
)