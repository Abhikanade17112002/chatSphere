import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Postimagecontainer from "../components/PostimageContainer/Postimagecontainer.jsx";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    console.log(userData,"USERDATA") ;
    console.log(post,"POSTDATA") ;

    const isAuthor = post && userData ? post.UserId === userData.$id : false;


    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((Status) => {
            if (Status) {
                appwriteService.deleteFile(post.FeaturedImage);
                navigate("/");
            }
        });
    };

    return post ? (
   
                <Container>
                    <Postimagecontainer >
                        <div className="Home">
                        <div class="  postimagecontainer card mb-3 p-3">
                       
                                <img  src={appwriteService.getFilePreview(post.FeaturedImage)}
                                        alt={post.Title} 
                                        class="card-img-top" />
                                        <div className="absolute right-6 top-6">
                             
                         </div>
                                <div class="card-body">
                                    <h5 class="card-title">Tittle :
                                     {post.Title}
                                     </h5>
                                    <p class="card-text">
                                        ...................
                                        {parse(post.Content)}</p>
                                    
                                </div>
                                { isAuthor &&     <div className="buttonsContainer">
                                  
                                        <Link to={`/edit-post/${post.$id}`}>
                                            
                                            <Button className="btn  btn-success">
                                                Edit
                                                </Button>
                                            </Link>
                                            <Button className="btn btn-danger" onClick={deletePost}>
                                                Delete
                                            </Button>
                                            </div>
                                    }
                        </div>
                        </div>
                        </Postimagecontainer>
                </Container>
    ) : null;
}