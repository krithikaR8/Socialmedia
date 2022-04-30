
import { FaCamera } from "react-icons/fa";
import { AuthContext } from "../context/auth";
   

import React, { useState ,useContext,useEffect} from 'react';
import {
    ref,
    getDownloadURL,
    uploadBytes,
    
  } from "firebase/storage";
  import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage,auth } from '../firebase';
import './ImageUpload.css';

function ImageUpload({ username }) {
    const { create,loader,user} = useContext(AuthContext);
  
        const [file, setFile] = useState(null)
          //...
          const chooseFile = (e) => {
                  if (e.target.files[0]){
                      setFile(e.target.files[0]);
                  }
              }
              const [caption, setCaption] = useState("")
              
                if (file === null){
                   alert('Please choose a file!')
                return;
                };
                const imageName = file.name;
           
                //Store the post Information into Firestore
                const addPost = function(caption, username, url) {
                const newPost = {
                    
                         caption: caption,
                         username: username,
                         imageURL: url
                     }
                     db.collection('posts').add(newPost)
                 };
                 // Save the uploaded picture into Firebase storage
                 const uploadTask = storage
                                      .ref(`images/${imageName}`)
                                      .put(file);
           //...
           const [progress, setProgress] = useState(0)
           //...
               uploadTask.on(                   
                  "state_changed",                  
                  (snapshot) => {                           
                      const progressNum = Math.round(                           
                      (snapshot.bytesTransferred/ snapshot.totalBytes)* 100                             
                      );                            
                      setProgress(progressNum);
                  },
                  (error) => {
                      console.log(error);
                      alert(error.message);
                  },
                  () => {
                      storage
                        .ref('images')
                        .child(imageName)
                    .getDownloadURL()
                    .then(url => {
                           addPost(caption, username, URL)
                  })
                })
                const [posts, setPosts] = useState([])
//...
const fetchData = () => {
  db
  .collection('posts')
  .orderBy('timestamp','desc')
  .limit(10)
  .get().then(snapshot=>{
    if (snapshot.docs.length === 0);
    setPosts([...posts, ...snapshot.docs.map(doc=> (
      {id: doc.id,
        post: doc.data()}
        ))])
      })
    }
  useEffect(() => {
    fetchData();
  }, [])
    return (


        <>
        {!loader && user ? (
          <form>
          <input
          className="child"
          type="text"
          name="upload-caption"
          placeholder="write your caption here"
          value={caption}
          onChange={(e)=>setCaption(e.target.value)}
          />
          <input
              id="fileinput"
              className="child"
              type="file"
              name="upload-file"
              onChange={chooseFile}
          />
          <button className="child" onClick={ImageUpload}>Upload</button>
          </form>
        ) : (
  
          ""
        )}
      </>
        
    )
}
      


export default ImageUpload;