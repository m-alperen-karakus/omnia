import { useEffect, useState } from "react";
import {
    collection,
    query,
    doc,
    orderBy,
    onSnapshot,
    getDocs,
} from "@firebase/firestore";
import { app, db} from "../firebase";
import { DocumentData, Firestore, QueryDocumentSnapshot, where ,getDoc} from "firebase/firestore";
const PostService = () => { };
// it turns all of posts
export const getPosts = () => {
    const [posts, setPosts] = useState<DocumentData[]>([]);

    useEffect(() => {
        const collectionPath = collection(db, "posts");
        getDocs(collectionPath).then((data) => {
            setPosts(
                data.docs.map((item) => {
                    return { ...item.data(), id: item.id };
                })
            );
        });
    }, []);

    return posts;
};
// it turns all of  featured post

export const getFeaturedPost = () => {
    const [featuredPost, setFeaturedPost] = useState<DocumentData>([]);
    useEffect(() => {
        const collectionPath = collection(db, "posts");
        const searchedData = query(
            collectionPath,
            where("isFeaturedArticle", "==", true)
        );
        getDocs(searchedData).then((data) => {
            setFeaturedPost(
                data.docs.map((item) => {
                    return { ...item.data(), id: item.id };
                })
            );
        });
    }, []);

    return featuredPost;
};
// it turns all of posts which is have same tag

export const getPostsByTags = (tag = "editorsPick") => {
    const [postsByTag, setPostsByTag] = useState<DocumentData[]>([]);
    useEffect(() => {
        const collectionPath = collection(db, "posts");
        const searchedData = query(
            collectionPath,
            where("tags", "array-contains", `${tag}`)
        );

        getDocs(searchedData).then((data) => {
            setPostsByTag(
                data.docs.map((item) => {
                    return { ...item.data(), id: item.id };
                })
            );
        });
    }, [tag]);

    return postsByTag;
};

//it turns a single post using id

export const getPostWithID = (id: string) => {
    const [singlePost, setSinglePost] = useState<DocumentData>([]);

    useEffect(() => {
        const docPath = doc(db , `posts`,id);
        getDoc(docPath).then((data)=>{
           setSinglePost( { ...data.data() , id:data.id })

        })
     }, []);

    return singlePost;
};
