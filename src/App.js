import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches} from "./api/Api";
import React, { useEffect , useState  } from "react";


 
function App() {


  const [matches,setMatches] = useState([]);

  useEffect(() => {
    getMatches()
    .then((data) => { 
    setMatches(data.matches)
    console.log(data.matches)
    })
    .catch(error => alert("not load data"));
}, []);
  
   
  return (
    <div className="App">
      <Navbar />
     <Typography varient="h3">Welcome to My Live Score App</Typography>
    <Grid container>
      <Grid sm="3"></Grid>
      <Grid sm="6">
      {
       matches.map((match) => (
         <MyCard  key ={match,unique_id}match={match} />

       ))
     }
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
