import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

const Navbar = () => {
    const small={
        margin: "0",
        padding: "0",
        boxSizing: "border-box"
      }
    return (
        <div className="navbar" style={{width:"100%",margin:"0 0", padding:"1rem" ,display:"flex", justifyContent:"flex-start",alignItems:"center",position:"fixed",top:"0",zIndex:'111'}}>
            <h1 style={{margin:"0",padding:"0"}}><Link     style={{textDecoration:"none" ,marginLeft:"1rem",color:"black"}}  to="/">Ignou movies</Link></h1>
            <h3 style={{margin:"0",padding:"0"}}><Link style={{textDecoration:"none" ,marginLeft:"1rem",color:"black"}}  to="/favourite">Favourite</Link></h3>
            
        </div>
    )
}

export default Navbar
