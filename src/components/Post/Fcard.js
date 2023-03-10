import React ,{useState}from 'react'
import './Sdata';
import Sdata from './Sdata';
import { PostCard } from './PostCard';
export const Fcard = (val) => {
    const [data,setData] = useState([]);
    const [search,setSearch] = useState(null);
    
    const onSubmit = e =>{
        e.preventDefault();
        setSearch(search);
      }
  return (
    <>
            <div class="row" id="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h1 class="module-title font-alt mb-0">
                
                <form className="d-flex" onSubmit={onSubmit} id="form">
                <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                <input className="btn btn-outline-success" type="submit" value="Search" id='btn' />
                </form>
                </h1>
              </div>
            </div>
        <PostCard img={val.img}
            title={val.title}
            sname={val.sname}
            links={val.links}
        />
        
    </>
        
  )
}
