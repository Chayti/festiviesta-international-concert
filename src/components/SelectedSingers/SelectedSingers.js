import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import "./SelectedSingers.css";

const SelectedSingers = (props)=>{
    const selected = props.selected;
    const totalPayment = selected.reduce((prev,singer) => prev+singer.salary,0);
    return(
        <div>
            <div className="card selected-singer-bg">
                <div className="card-body fw-bold text-center" style={{color:'darkred'}}>
                    <p className="p-1 me-1 mb-0">
                        <FontAwesomeIcon icon={faUser} /> &nbsp;
                         Singers Selected: {selected.length}
                    </p>
                    
                    {
                        selected.map(selectedSinger => <li>{selectedSinger.name}</li>)
                    }
                    <p className="mt-4 mb-0 pb-0">Total Payment: ${totalPayment}</p>
                    <a href="/details" className="cart btn me-2 mt-1">View Details</a>
                </div>
            </div>
        </div>
    );
}

export default SelectedSingers;