const request = require('request');

request("http://jsonplaceholder.typicode.com/users/1", (error, response, body) =>  {
    // eval(require('locus'));
    if (!error && response.statusCode == 200) {
        const parsedData = JSON.parse(body);
        console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
    } else {
        console.log("SOMETHING WENT WRONG");
    }
});