import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './post.css';
import { PostCard } from './PostCard'
import Sdata from './Sdata'
import { Fcard } from './Fcard';
import AdminNavbar from '../Admin/AdminNavbar'
export const Post = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data,setData] = useState([]);
    const [search,setSearch] = useState(null);
    const onSubmit = e =>{
        e.preventDefault();
        setSearch(search);
      }
  return (
    <>
    <AdminNavbar/>
    
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className = "row" >
        {
            
            Sdata 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                    <div  id="post_prof" className = "col-md-3" key={val.sname}>
                         <div className="card" style={{"width": "17.5rem"}} >
                            <img id='iamgess' src={val.img} className="card-img-top" alt={val.name} />
                            <div className="card-body">
                                <h5 id='h5title' className="card-title">{val.title}</h5>
                                <a id="atag" className="textt" href={val.links}>Read More</a>
                                </div>
                            </div>
                      </div> 
                )
              })
        
            
            }
        </div>
      </div>
    </>
  )
}
