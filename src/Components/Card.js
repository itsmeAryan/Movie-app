import React,{useState,useEffect} from 'react'
import './Card.css'
import {Link} from 'react-router-dom'
import Im from '../img/1.jpg'
const Card = (props) => {
   const [id,setid]=useState([]);
   let data=[]
   const handle=(ids)=>{
let dom =JSON.parse(localStorage.getItem("i")) || [];
if(id.includes(ids._id)){
    dom =dom.filter((x)=>x._id!==ids._id)
}else{
    dom.push(ids)
}
localStorage.setItem("i",JSON.stringify(dom));
imporve()
   }
const  game=()=>{
    imporve()
}
   function imporve(){
let dom =JSON.parse(localStorage.getItem("i")) || [];
let side=dom.map((x)=>x._id);
setid([...side])
   }
  
    return (
        <div className="card" onLoad={game}>
            <div className="card-middle">
            <div className="card-img">
                <Link to={`/${props.data._id}`}>
                <img src={props.data.img} alt="the end:"/></Link>
            </div>
<div className="card-info" style={{paddingLeft:"0.5rem"}}>
    <h3>{props.data.name}</h3>
    
</div>
<div className="card-favourite" onClick={()=>handle(props.data)}>
    <span>{!id.includes(props.data._id)?"add to fovourite":"remove from favourite"}</span>
</div>
            </div>
        </div>
    )
}

export default Card
