import { useEffect, useState } from "react";
import "../App.css";
import Country from "./Country";



const Countries = () => {
    const [countries,SetCountries]=useState([])
    const [countries_name,setCountriesName]=useState([])
    const handleVisited=(data)=>{
      
      const new_Array=[...countries_name,data];
      setCountriesName(new_Array)
    }

  useEffect(()=>{
    async function load_country_data() {
      const load_data=await fetch("https://restcountries.com/v3.1/all")
      const convert_Load_data=await load_data.json()
      SetCountries(convert_Load_data)
      
    }
    // call the function
    load_country_data()
},[])
    return (
        <div >
            <h1>My All Countries</h1>
            <p>Length {countries.length}</p>
            <p>My country visited name:</p>
            <ul>
              {countries_name.map((country_name_single)=><li key={country_name_single.cca3}>{country_name_single.name.common}</li>)}
             </ul>
           <div className="country_container">
           {
                countries.map((item)=><Country key={item.cca3} country_details={item}
                 import_handleVisited={handleVisited} ></Country>)
            }
           </div>
            
        </div>
    );
};

export default Countries;