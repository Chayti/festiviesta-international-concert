import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import "./SelectedSingers.css";

const SelectedSingers = ()=>{
    return(
        <div>
            <div className="card selected-singer-bg">
                <div className="card-body fw-bold text-center" style={{color:'darkred'}}>
                    <p className="p-1 me-1">
                        <FontAwesomeIcon icon={faUser} /> &nbsp;
                        Singers Selected: 
                    </p>
                    <p className="mt-4 mb-0 pb-0">Total Payment: $</p>
                    <a href="#" className="cart btn me-2 mt-1">View Details</a>
                </div>
            </div>
        </div>
    );
}

export default SelectedSingers;