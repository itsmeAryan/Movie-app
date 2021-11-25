import React, { Component } from 'react'
import "./favourite.css"
import On from '../img/1.jpg';
import {Link} from 'react-router-dom'
 class Favourite extends Component {
     constructor(props){
         super(props);
         this.state={
movies:[],
genres:[],
inp0:'',
love:true,
love2:true,
hide:true
         }
     }
     cont=()=>{
        window.addEventListener("resize",(e)=>{
            if(window.innerWidth <=360){
                this.setState({
                    hide:false
                })
            }else{
                this.setState({
                    hide:true
                })
            }
        })

     }

     componentDidMount(){
         let data=JSON.parse(localStorage.getItem("i")) || [];
         console.log(data);
     
         let all=[];
         for(let i=0;i<data.length;i++){
             if(!all.includes(data[i].type)){
                 all.push(data[i].type)
             }
         }
      all.unshift("All genres");
       
         this.setState({
            movies:[...data],
            genres:[...all]
        })
this.cont()

        }

        Change=(e)=>{
         let data=JSON.parse(localStorage.getItem("i")) || [];
data=data.filter((x)=>x.name.includes(e.target.value) ||x.type.includes(e.target.value) );
console.log("filter",data);
this.setState({
    inp0:e.target.value,
    movies:[...data]
})
            // console.log(e.target.value);
        }
        Fetch=(e)=>{
this.cont()

         let data=JSON.parse(localStorage.getItem("i")) || [];

            if(e.target.innerText==="All genres"){
this.setState({
    movies:[...data]
})
            }
            else{
    data=data.filter((x)=>x.type.includes(e.target.innerText));
    this.setState({
    movies:[...data]

    })
            }
        }
        DelOne=(id)=>{
            let data=JSON.parse(localStorage.getItem("i")) || [];
data=data.filter((x)=>x._id !=id);
localStorage.setItem("i",JSON.stringify(data))
this.setState({
    movies:[...data]
})
        }

        Rating=()=>{
this.cont()

            let data=this.state.movies;
            if(this.state.love){
                data.sort((a,b)=>{
                    return b.rating-a.rating;
               })
              this.setState({
                  movies:[...data]
              })
              this.setState({love:false})
            }else{
                data.sort((a,b)=>{
                    return a.rating-b.rating;
               })
              this.setState({
                  movies:[...data]
              })
              this.setState({love:true})
            }
           
          
        }
        Famous=()=>{
this.cont()

            let data=this.state.movies;
            if(this.state.love2){
                data.sort((a,b)=>{
                    return b.famous-a.famous;
               })
              this.setState({
                  movies:[...data]
              })
              this.setState({love2:false})
            }else{
                data.sort((a,b)=>{
                    return a.famous-b.famous;
               })
              this.setState({
                  movies:[...data]
              })
              this.setState({love2:true})
            }
           
          
        }
    render() {
        
        return (
            <div className="favourites">
            <div className="favParent">
                <div className="fav-left">
                    <div className="leftblack">
                        <ul>
                            {this.state.genres && this.state.genres.map((x)=>(
                            <li onClick={this.Fetch}>{x}</li>

                            ))}
                            {/* <li>Actions</li>
                            <li>All genres</li>
                            <li>All genres</li>
                            <li className="last">All genres</li> */}

                        </ul>
                    </div>
                </div>
                <div className="fav-right">
                    <div className="search">
                        <input onChange={this.Change} value={this.state.inp0} type="search" placeholder="search movies" />
                    </div>
                    <div className="itemContainer">
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    {this.state.hide ? (
                                    <th style={{cursor:"pointer"}} onClick={this.Famous}>Popularity</th>

                                    ):console.log("love does not exist")}
                                    <th style={{cursor:"pointer"}} onClick={this.Rating}>Rating</th>
                                    <th>Title</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.movies.length>0? this.state.movies.map((x)=>(
                                    <tr>
                                    <td id="pro" style={{display:"flex",alignItems:"center"}}><Link to="/"><img src={x.img} style={{width:"70px"}}/></Link> &#160;<strong>{x.name}</strong></td>
                                    <td>{x.type}</td>
                                    {this.state.hide ?(
                                        <td>{x.famous}</td>
                                    ):console.log()}
                                    <td>{x.rating}</td>
                                    <td><span onClick={()=>this.DelOne(x._id)} style={{padding:"0.5rem",color:"white",background:"red",cursor:"pointer"}}>Delete</span></td>

                                </tr>
                                )):(
                                 <h1>Loading</h1>
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
        )
    }
}
export default Favourite