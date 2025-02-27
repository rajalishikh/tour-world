import { useEffect, useState } from "react";
import "../App.css";
import Country from "./Country";



const Countries = () => {
    const [countries,SetCountries]=useState([])
    const [countries_name,setCountriesName]=useState([])
    const[flag,setFlag]=useState([])
    // add country name in a list
    const handleVisited=(data)=>{
      const new_Array=[...countries_name,data];
      setCountriesName(new_Array)
    }
    // add country flag in list 
    const handleFlag=(data2)=>{
      console.log("My flag name is",data2)
      const new_flag=[...flag,data2]
      setFlag(new_flag)

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
            {/* countries name  */}
            <ul>
              {countries_name.map((country_name_single)=><li key={country_name_single.cca3}>{country_name_single.name.common}</li>)}
             </ul>
             {/* countries flag add  */}
             <div>
              {flag.map((item_flag,idx)=><img width={100} key={idx} src={item_flag}></img>)}
             </div>
           <div className="country_container">
           {
                countries.map((item)=><Country key={item.cca3} country_details={item}
                 import_handleVisited={handleVisited} import_flag={handleFlag} ></Country>)
            }
           </div>
            
        </div>
    );
};

export default Countries;