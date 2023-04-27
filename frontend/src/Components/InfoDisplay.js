import {React} from "react";



/**
 * React component with countryFastFacts in prop, which is json
 * to be manipulated for rendering
 * @param {countryFastFacts} countryFastFact object 
 * @returns render for the quick information on country
 */
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



/**
 * React component with json object containing all
 * information on country.
 * @param {countryFullFacts} countryFullFacts object 
 * @returns render for total informatiion on country
 */
const DisplayFullFacts = ({countryFullFacts})=>{
  if(countryFullFacts === null){
    return null;
  }
  return (
    <div className={"fullFactsContainer"}>
      <JsonFormatter data={countryFullFacts}/>
    </div>
  );
}



/**
 * React component to recursively render nested json data
 * in format of table.
 * @param {data} json object to be rendered 
 * @returns table containing nested json data
 */
const JsonFormatter = ({data})=>{
  if(typeof data === "object" && data !== null){
    return(
      <div className="tableContainer">
        <table className="fullFactsTable">
          <tbody>
            { Object.keys(data).map((k) => (
                <tr key={k}>
                    <th className="key">
                        {k}
                    </th>
                    <td className="objectValue">
                        <JsonFormatter
                            data={data[k]}
                        />
                    </td>
                </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }else{
    data = String(data);
    if(data.substring(0,4) === 'http'){
      return <a href={String(data)}>{String(data)}</a>;
    }
    return <div className="value">{data}</div>;
  }
}

export  {DisplayFastFacts,DisplayFullFacts};