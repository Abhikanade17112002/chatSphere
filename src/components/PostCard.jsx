import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import { MdDelete } from "react-icons/md";

function PostCard({$id, Title, FeaturedImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
       
          <div class="card" style={{width: "18rem" }}>
            <img src={appwriteService.getFilePreview(FeaturedImage)} alt={Title} class="card-img-top "  style={{width: "18rem" , height: "18rem"}}/>
            <div class="card-body">
              <h5 class="card-title">{Title}</h5>
            
            </div>
          </div>
    </Link>
  )
}


export default PostCard