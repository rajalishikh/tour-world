import PropTypes from 'prop-types';
import { useState } from 'react';
import "../App.css";

const Country = ({country_details}) => {
    console.log(country_details)
    const {name,flags}=country_details
    const [visited,setVisited]=useState(false)
    function handleVisited(){
        setVisited(!visited)
    }
    return (
        
        <div className="box">
        <p>Name: {name.common}</p>
        <img src={flags.png} alt="Country Flags Name" width="200px" /><br />
        <button onClick={handleVisited}>{visited?"Going":"Visited"}</button>
        <p>{visited?"The country visiting is complete":"I am not gone this country any Time"}</p>
        
    </div>
        
    );
};

export default Country;
// default p[rop types
Country.propTypes={
    country_details:PropTypes.object.isRequired
}