import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { selectPost } from './data/redux/postSlice';
import { login, logout, selectUser } from './data/redux/userSlice';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const posts = useSelector(selectPost)
  const disptach = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        disptach(login({
          username: authUser.displayName,
          imgSrc: authUser.photoURL,
          id: authUser.uid
        }))
      }else{
        disptach(logout())
      }
    })
    return unsubscribe;
  },[])
  

  return (
    <div className="app">
      {user ? (
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
      ) : 
      <Login/>}
    </div>
  );
}

export default App;
