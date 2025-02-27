import PropTypes from 'prop-types';
import "../App.css";

const Country = ({country_details}) => {
    console.log(country_details)
    const {name,flags}=country_details
    return (
        
        <div className="box">
        <p>Name: {name.common}</p>
        <img src={flags.png} alt="Country Flags Name"  />
        
    </div>
        
    );
};

export default Country;
// default p[rop types
Country.propTypes={
    country_details:PropTypes.object.isRequired
}