import React,{useState, useEffect} from 'react';
import './App.css';

const App =()=> {
  const[items, setItems] =useState([]);

  useEffect(()=>{
    fetch('http://universities.hipolabs.com/search?country=United+Kingdom')
    .then((res) =>res.json())
    .then((data)=>setItems(data));
  },[])
  return (
    <div className="App">
    <h1>Universities List</h1>
      <div className='container'>
        {items.map((item)=>{
          return(
           <div className='card'>
           <p>{item.name}</p>
            <p>{item.alpha_two_code}</p>
            <p>{item.domains}</p>
            <p>{item.web_pages}</p>
           </div>
           )
        })}
      </div>
    </div>
  );
}

export default App;
