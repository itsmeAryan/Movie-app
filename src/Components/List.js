import React, { Component } from 'react'
import axios from 'axios'
import './Banner.css'
import Card from './Card'
import {connect} from 'react-redux';
import * as diff from '../REdux/Action/typeAction'
 class List extends Component {
  constructor(props){
      super(props)
      this.state={
          movies:[],
          current:1
          ,page:[]
      }
  }
 async componentDidMount(){
    this.props.dis()
     

      let {data}=await axios.get("http://localhost:3001/api");
      this.LetUpdate()
     
  }
  LetUpdate=()=>{
    let limit=5;
    let len=this.props.data.length;
    let pages=Math.ceil(len/limit);

    let lep=[]
    for(let i=1;i<=pages;i++){
lep.push(i)
// console.log("hey",pages);
    }

    let si=(this.state.current-1)*limit;

    let ei=si+limit;

    let filterData=this.props.data.slice(si,ei);

    this.setState({
      movies:[...filterData],
      page:[...lep]
  })
  }
  Increase=(s)=>{
      this.setState({
          current:s
    }
    )
    this.LetUpdate()

  }
    render() {

  

        return (
            <div className="list">
           

                <h1 style={{textAlign:"center",background:"whitesmoke",padding:"1rem"}}>Trending <span style={{color:"yellow"}}>🔥</span></h1>
               <div className="list-container">
                   {this.state.movies.length>0?this.state.movies.map((x)=>(
                   <Card key={x._id} data={x}/>

                   )):<h1>Loading data</h1>}
                 

               </div>
               <div className="pagination">
                   <ul>
                       {this.state.page && this.state.page.map((x)=>(
                       <li onClick={()=>this.Increase(x)}>{x}</li>

                       ))}
                      

                   </ul>
               </div>
            </div>
        )
    }
}
// here we are fetching data
const mapStateToProps=(state)=>{
    return{
        data:state.one.movies
    }
}
// here we are dispatching our data
const mapDispatchToProps=(dispatch)=>{
    return{
        dis:async()=>{ 
            
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)