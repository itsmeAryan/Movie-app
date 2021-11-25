import React from 'react'
import {BrowserRouter as Adder, Routes ,Route} from 'react-router-dom'
import Banner from './Components/Banner'
import Favourite from './Components/Favourite';
import List from './Components/List'
import Navbar from './Components/Navbar';
import Single from './Components/Single';

const App = () => {
    return (
        <div>
            <Adder>
                <Navbar/>
                <Banner/>
                {/* <List/> */}
                <Routes>
                    <Route   path="/"  element={<List/>}/>
                    <Route  path="/:id"  element={<Single/>}/>

                    <Route  path="/favourite"  element={<Favourite/>}/>

                </Routes>
            </Adder>
        </div>
    )
}

export default App
