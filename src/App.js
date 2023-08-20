import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostData } from './store/post-slice';
import Comment from './components/Comments/Comment';
import AddComment from './components/Comments/add-comment';
import Container from './components/ui/container';
import DeleteComment from './components/Comments/delete';
import img from "./images/avatars/image-amyrobson.png"

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.post.items);
  console.log(user);
  useEffect(() => {
    dispatch(fetchPostData())
  }, [dispatch])
  return (
    <Container>

      {
          user.hasOwnProperty('currentUser'&& 'comments') && user.comments.map((commentData, index)=>(

            <Comment
            key={commentData.id}
            index={index}
            commentData={commentData}
            user={user.currentUser}
            />
          ))
      }
      {
        user.hasOwnProperty('currentUser'&& 'comments') && 
        <AddComment
        mode="SEND"
        user={user.currentUser}
        />
      }
  </Container>
  );
}

export default App;
