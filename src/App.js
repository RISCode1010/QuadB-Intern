import React, {useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import SingleProduct from './components/SingleProduct';

function App() {

  const [data , setData] = useState([]);

 useEffect(() => {
    const fetchData = async() => {
      // const x = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      const x = await axios.get(process.env.REACT_APP_API);
     setData(x.data);
    };

    fetchData();
 }, [])

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Homepage data={data} />}/>
      <Route
            exact
            path="/show/:id"
            element={<SingleProduct data={data} />}
          />
    </Routes>
    </BrowserRouter>   
  );
}

export default App;
