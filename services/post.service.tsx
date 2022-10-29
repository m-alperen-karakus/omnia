import { useEffect, useState } from "react";
import { collection , query ,orderBy ,onSnapshot ,getDocs } from "@firebase/firestore"
import {app,db} from "../firebase"
import { DocumentData, QueryDocumentSnapshot, where } from "firebase/firestore";
const PostService =() =>{
    
}

export const getPosts = () => {
    const [posts,setPosts] = useState<DocumentData[]>([]);

    useEffect(  ()=>{
         const collectionPath = collection(db, 'posts');
        getDocs(collectionPath).then((data)=>{
            setPosts(data.docs.map((item)=>{
                return { ...item.data() , id:item.id}
            }));
        })
    },[]) 

    return posts
}

export const getFeaturedPost = () =>{
    const [featuredPost,setFeaturedPost] = useState<DocumentData>([]);
    useEffect( ()=>{
        const collectionPath = collection(db, 'posts');
        const searchedData = query(collectionPath, where("isFeaturedArticle" , "==" , true))
        getDocs(searchedData).then((data)=>{
            setFeaturedPost(data.docs.map((item)=>{
                    console.log(item.data())
                    return {...item.data() , id:item.id}
                
            }))
        })
    },[])

    return featuredPost
}


