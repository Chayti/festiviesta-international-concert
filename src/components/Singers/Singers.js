import React from "react";
import { useState,useEffect } from 'react';
import SelectedSingers from "../SelectedSingers/SelectedSingers";
import Singer from "../Singer/Singer";
import "./Singers.css";

const Singers = () =>{

  const [singers,setSingers] = useState([]);
  useEffect(()=>{
    fetch('./singers.JSON')
    .then(res=>res.json())
    .then(data=>setSingers(data));
  },[]);

  return(
    <div className="mx-0 py-3 px-2 rounded singers-section row">
        
      <div className="col-12 col-md-9 singer">
        {
          singers.map( singer => <Singer singer={singer} key={singer.id}></Singer> )
        }
      </div>

      <div className="col-12 col-md-3">
        {
          <SelectedSingers></SelectedSingers>
        }
      </div>

    </div>
  );
}

export default Singers;