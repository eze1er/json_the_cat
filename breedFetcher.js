const { response } = require('express');
const request = require('request');

const breedName = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return `We find an error: ${error}
      `;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(true, null);
    }
    const breed = data[0];
    let description = breed.description;
    console.log(`breed: ${description}`);
    return (`breed: ${description}`);
})
}

const callback = () => console.log(`Breed name "${breedName}" doesn't exist!`);

fetchBreedDescription(breedName, callback);