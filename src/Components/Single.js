import React, { Component } from 'react'
import axios from 'axios';
import * as diff from '../REdux/Action/typeAction'
import {connect} from 'react-redux'
import './Single.css'
class Single extends Component {
    constructor(props){
        super(props)
       this.state={
           movie:[],
           favourite:[]
       }
        
    }
componentDidMount(){
    const id = document.baseURI;
    let fill=id.lastIndexOf('/')
    let link=id.slice(fill+1)
    console.log(this.props.dis(link));
    console.log(this.props.data);
    // this.setState({
    //     movie:[...this.props.data]
    // })
}
componentDidUpdate() {

    if (this.state.movie.length ==0) {
      

      this.setState(
        {
         movie:[...this.props.data]


        }
      )
    }

  }
  
  
  handle=(ids)=>{
    let data=[]
let dom =JSON.parse(localStorage.getItem("i")) || [];
if(this.state.favourite.includes(ids._id)){
   dom =dom.filter((x)=>x._id!==ids._id)
}else{
   dom.push(ids)
}
localStorage.setItem("i",JSON.stringify(dom));
this.imporve()
  }
 game=()=>{
   this.imporve()
}
  imporve=()=>{
let dom =JSON.parse(localStorage.getItem("i")) || [];
let side=dom.map((x)=>x._id);
this.setState({favourite:[...side]})
  }
    render() {
        return (
            <div>
            <h1>Best Movie</h1>

                {this.state.movie.length>0? this.state.movie.map((x)=>(
<div className="Singledata" onLoad={this.game}>
<div className="Exteractor">
    <div className="child-left">
        <div className="img">
            <img src={x.img} />
        </div>
    </div>
    <div className="child-right">
       <div className="bind">
       <h1>{x.name}</h1>
        <p>{x.desc}</p>
        <span><strong>Ratings </strong>{x.rating}</span>
        <div className="game" onClick={()=>this.handle(x)}><span>{!this.state.favourite.includes(x._id)?"add to fovourite":"remove from favourite"}</span></div>
       </div>
    </div>

</div>
    </div>

                )):<h1>data still loading..</h1> }
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        data:state.one.movies
    }
}
// here we are dispatching our data
const mapDispatchToProps=(dispatch)=>{
    return{
        dis:async(id)=>{ 
            
            dispatch({
                type:diff.data_loading
            })
        try {
            const {data}=await axios.get(`http://localhost:3001/api/${id}`);
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
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Single);