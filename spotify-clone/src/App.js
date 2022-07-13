// import logo from './logo.svg';
import React,{ useEffect } from 'react';
import Login from './components/Login';
import Spotify from "./components/Spotify";
import { reducerCases } from './utils/Constants';
import { useStateProvider } from './utils/StateProvider';
// import './App.css';

 function App() {
  const [{ token },dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1];
      // console.log(token);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  },[token, dispatch]);
  return (
    <div className='App'>
       {token ? <Spotify/> : <Login/>}
    </div>
  );
}

export default App;
