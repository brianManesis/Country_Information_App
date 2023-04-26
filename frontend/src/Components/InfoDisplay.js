import {React} from "react";

const DisplayFastFacts = ({countryFastFacts})=> {
    if(countryFastFacts!==null){
    return (
        <div className="fastFactsContainer">
          <h2>Fast Facts</h2>
            <img className="Flag" alt="country" src={countryFastFacts.flag}></img>
            <div className="fastFactCountryInfo">
                <h1 className="countryName">{countryFastFacts.countryName}</h1>
                <h3>Population: {countryFastFacts.population}</h3>
                <h3>Capital: {countryFastFacts.capital}</h3>
                <h3 >Region: {countryFastFacts.region}</h3>
                <h3>Currency: {countryFastFacts.currency}</h3>
            </div>
        </div>        
    );
    }
    else{
        return (<div></div>);
    }
} 
const DisplayFullFacts = ({countryFullFacts})=>{
  if(countryFullFacts !== null){
    return (
        <div className="fullFactsContainer">
          <h2>Country Info</h2>
          <table className="fullFactsTable">
            <tbody>
            {renderNestedObjects(countryFullFacts)}
            </tbody>
          </table>
        </div>
    );
  }
  else{
    return <div></div>;
  }
}
const renderNestedObjects = (data) => {
    if (typeof data === 'object' && data !== null) {
      return Object.keys(data).map((key) => (
        <tr key={key}>
          <td><strong>{key}:</strong></td>
          <td>{renderNestedObjects(data[key])}</td>
        </tr>
      ));
    }
    else if(String(data).substring(0,4) === 'http'){
      return (<a href={String(data)}>{String(data)}</a>);
    }
     else {
      return (<p>{String(data)}</p>);
    }
  }
export  {DisplayFastFacts,DisplayFullFacts};
