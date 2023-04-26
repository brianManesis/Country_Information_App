const axios = require('axios');

const countryDetails = (req,res,next)=>{
    const name = req.params.name;
    res.set('Content-Type', 'application/json');
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
    .then(result=>{
        let data = result.data[0];
        console.log(data);
        res.json(data);
    })
    .catch(err=>{
        if (err.response && err.response.status === 404) {
          res.status(404).json({ error: 'Country not found' });
        } 
        else {
          res.end(err);
        }
    });
}

module.exports = countryDetails;