import { useEffect, useState } from 'react';
import './App.css';
import { DisplayFastFacts, DisplayFullFacts } from './Components/InfoDisplay';
import { SearchBar } from './Components/SearchBar';

function App() {
  const [search,setSearch] = useState("");
  const [countryFastFacts, setCountryFastFacts] = useState(null);
  const [countryFullFacts,setCountryFullFacts] = useState(null);
  useEffect(()=>{
    const handleCountryChange = async() =>{
      if(search!==""){
        fetch(`http://localhost:5000/name/${search}`)
        .then(async data=>{
            data = await data.json();
            let currencies = data.currencies;
            let newCountry = {
            flag: data.flags.png,
            countryName: data.name.official,
            population:data.population,
            capital:data.capital[0],
            region:data.region,
            currency:currencies[Object.keys(currencies)[0]].name
          }
          setCountryFastFacts(newCountry);
          setCountryFullFacts(data);
        })
        .catch(err=>{
          console.log(err);
          setCountryFastFacts(null);
          setCountryFullFacts(null);
        });
      }
      else{ setCountryFastFacts(null); setCountryFullFacts(null); }
    }
    const delay = setTimeout(handleCountryChange,250);
    return ()=> clearTimeout(delay);
  },[search]);

  return (
    <div className="App">
        <SearchBar search={search} setSearch = {setSearch}/>
        <br></br>
        <DisplayFastFacts countryFastFacts={countryFastFacts}/>
        <DisplayFullFacts countryFullFacts={countryFullFacts}/>
    </div>
  );
}
export default App;