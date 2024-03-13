/* JSON
const data = `{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}`
const parsedData = JSON.parse(data)
parsedData.ticker.price //BTC value */

const dog = { breed: 'lab', color: 'black', isAlive: true, owner: undefined }
JSON.stringify(dog)


/* Making XMLHttpRequests (XHRs) - OLD, BAD WAY
const req = new XMLHttpRequest;

req.onload = function () {

}

req.onload = function () {
    console.log("ERROR!!!");
    const data = JSON.parse(this.responseText);
    console.log(data);
}

req.open("GET", "https://swapi.dev/api/people/1/");
req.send(); */


/* Fetch API - NEW, NICE WAY
fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("RESOLVED!", res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("ERROR!", e);
    }); */


/* fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("RESOLVED!", res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
        return fetch("https://swapi.dev/api/people/2/")
    })
    .then(res => {
        console.log("SECOND REQUEST RESOLVED");
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("ERROR!", e);
    }); */

//using fetch, async functions & try/catch
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("ERROR!", e);
    }
};

loadStarWarsPeople();