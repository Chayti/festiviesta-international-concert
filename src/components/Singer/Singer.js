import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faVoicemail, faAddressCard} from '@fortawesome/free-solid-svg-icons';
import "./Singer.css";

const Singer = (props) =>{

    const {name, img, age, occupation, genre, country, salary} = props.singer;

    return(
        <div>
            <div className="card singer-bg">

                <div className="rounded m-2" height="200px" width="200px">
                <img src={img} height="200px" width="200px" className="card-img-top" alt={name}/>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">Name: {name}</h5>
                    <p className="card-text py-0 my-0">Occupation: {occupation}</p>
                    <p className="card-text py-0 my-0">Genre: {genre}</p>
                    <p className="card-text py-0 my-0">Age: {age}</p>
                    <p className="card-text py-0 my-0">Country: {country}</p>
                    <p className="card-text py-0 my-0">Salary: ${salary}</p>

                    <button onClick={()=>props.hireForConcert(props.singer)} className="selected btn me-2 mt-3">
                        <FontAwesomeIcon icon={faPhone} /> 
                        &nbsp;
                        Hire for Concert
                    </button>

                    <div className="mt-2 text-center social-icons">
                        <a href="/address" className="p-1 me-1"><FontAwesomeIcon icon={faAddressCard} /></a>
                        <a href="/mail" className="p-1"><FontAwesomeIcon icon={faVoicemail} /> </a>
                    </div>

              </div>
            </div>
        </div>
    );
}

export default Singer;