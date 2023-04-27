const axios = require('axios');

/**
 * Controller for express app which serves the request 
 * with name parameter by calling the 
 * restcountries name endpoint, then sending the data 
 * recieved back.
 * @param {*} req 
 * @param {*} res 
 */
const countryDetails = (req,res)=>{
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