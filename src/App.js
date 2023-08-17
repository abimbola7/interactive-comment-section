import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { postActions } from './store/post-slice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostData } from './store/post-slice';
import Comment from './components/Comments/Comment';
import AddComment from './components/Comments/add-comment';
import Container from './components/ui/container';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.post.items);
  console.log(user); 
  useEffect(() => {
    dispatch(fetchPostData())
  }, [dispatch])
  return (
    <Container>
      {
          user.hasOwnProperty('currentUser'&& 'comments') && user.comments.map((commentData)=>(
            <Comment
            key={commentData.id}
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
