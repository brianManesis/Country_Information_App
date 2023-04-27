const { default: axios } = require("axios");

const url = "http://localhost:5000/name";
const restapi = "https://restcountries.com/v3.1/name";

describe("GET /name/:name ",()=>{
    test("should return json object for ireland",async()=>{
        const path = "/ireland";
        const appRes = await axios.get(url+path);
        const apiRes = await axios.get(restapi+path)[0];
        expect(appRes.status).toBe(200);
        expect(appRes === apiRes);
        expect(appRes.data.name.common === "Ireland");
    });
    test("should return json object for ireland",async()=>{
        const path = "/ire";
        const appRes = await axios.get(url+path);
        const apiRes = await axios.get(restapi+path)[0];
        expect(appRes.status).toBe(200);
        expect(appRes === apiRes);
        expect(appRes.data.name.common === "Ireland");
    });
    test("should return json object for usa",async()=>{
        const path = "/usa";
        const appRes = await axios.get(url+path);
        const apiRes = await axios.get(restapi+path)[0];
        expect(appRes.status).toBe(200);
        expect(appRes === apiRes);
        expect(appRes.data.name.common === "United States");
    });
    test("should return country not found",async()=>{
        const path = "/fakecountry";
        try{
           await axios.get(url+path);
        }catch(err){
            console.log(err);
            expect(err.response.status).toBe(404);
            expect(err.data === { error: 'Country not found' })
        }
    })
});