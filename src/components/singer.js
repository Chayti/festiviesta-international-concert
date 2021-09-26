import React from "react";

const Singer = (props) =>{
    const {singers} = props;
    console.log(singers);
    return(
        <div>
            {
                singers.map(singer=><p>{singer.name}</p>)
            }
            {
                singers.map(singer=><img src={singer.img}></img>)
            }
        </div>
    );
}

export default Singer;