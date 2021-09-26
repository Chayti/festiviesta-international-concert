import React from "react";
import { useState,useEffect } from 'react';
import SelectedSingers from "../SelectedSingers/SelectedSingers";
import Singer from "../Singer/Singer";
import "./Singers.css";

const Singers = () =>{

  const [singers,setSingers] = useState([]);
  const [selected, setSelectecd] = useState([]);

  useEffect(()=>{
    fetch('./singers.JSON')
    .then(res=>res.json())
    .then(data=>setSingers(data));
  },[]);

  const hireForConcert = (singer)=>{
    if(!selected.find(selectedSinger => selectedSinger.id === singer.id)){
      const newSelected = [...selected, singer];
      setSelectecd(newSelected);
    }
  }

  return(
    <div className="mx-0 py-3 px-2 rounded singers-section row">
        
      <div className="col-12 col-md-9 singer">
        {
          singers.map( singer => 
            <Singer 
              key={singer.id}
              singer={singer} 
              hireForConcert={hireForConcert}
            ></Singer> )
        }
      </div>

      <div className="col-12 col-md-3">
        {
          <SelectedSingers selected={selected}></SelectedSingers>
        }
      </div>

    </div>
  );
}

export default Singers;