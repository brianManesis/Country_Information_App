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

// const DisplayFullFacts = ({countryFullFacts})=>{
//   return <Json data={countryFullFacts} />;
// }
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