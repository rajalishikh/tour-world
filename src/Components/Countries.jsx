import { useEffect, useState } from "react";
import Country from "./Country";



const Countries = () => {
    const [countries,SetCountries]=useState([])

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
            {
                countries.map((item)=><Country key={item.cca3} country_details={item}></Country>)
            }
            
        </div>
    );
};

export default Countries;